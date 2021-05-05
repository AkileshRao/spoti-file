require('dotenv').config()

const express = require('express'); // Express web server framework
const request = require('request'); // "Request" library
const cors = require('cors');
const querystring = require('querystring');
const cookieParser = require('cookie-parser');
const app = express()
const path = require('path')
const PORT = process.env.PORT || 8888;

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
// let REDIRECT_URI = 'http://localhost:8888/callback'
// let FRONTEND_URI = 'http://localhost:3000'
let REDIRECT_URI = process.env.REDIRECT_URI || 'http://localhost:8888/callback';
let FRONTEND_URI = process.env.FRONTEND_URI || 'http://localhost:3000';


const generateRandomString = function (length) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

const stateKey = 'spotify_auth_state';

app.use(express.static(path.resolve(__dirname + '../client/build')));

app.use(express.static(path.resolve(__dirname + '../client/build')))
    .use(cors())
    .use(cookieParser())
    .use(express.static(path.resolve(__dirname + '../client/build')))


app.get('/', function (req, res) {
    res.render(path.resolve(__dirname, '../client/build/index.html'));
});

app.get('/login', function (req, res) {
    let state = generateRandomString(16);
    res.cookie(stateKey, state);

    // your application requests authorization
    const scope = 'user-read-private user-library-read user-read-email user-read-recently-played user-top-read user-follow-read user-follow-modify playlist-read-private playlist-read-collaborative playlist-modify-public';
    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: CLIENT_ID,
            scope: scope,
            redirect_uri: REDIRECT_URI,
            state: state
        }));
});

app.get('/callback', function (req, res) {
    const code = req.query.code || null;
    const state = req.query.state || null;
    const storedState = req.cookies ? req.cookies[stateKey] : null;

    if (state === null || state !== storedState) {
        res.redirect('/#' +
            querystring.stringify({
                error: 'state_mismatch'
            }));
    } else {
        res.clearCookie(stateKey);
        const authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
                code: code,
                redirect_uri: REDIRECT_URI,
                grant_type: 'authorization_code'
            },
            headers: {
                'Authorization': 'Basic ' + (new Buffer(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'))
            },
            json: true
        };

        request.post(authOptions, function (error, response, body) {
            if (!error && response.statusCode === 200) {

                const access_token = body.access_token,
                    refresh_token = body.refresh_token;

                const options = {
                    url: 'https://api.spotify.com/v1/me',
                    headers: { 'Authorization': 'Bearer ' + access_token },
                    json: true
                };

                // use the access token to access the Spotify Web API
                request.get(options, function (error, response, body) {
                });

                // we can also pass the token to the browser to make requests from there
                // res.send({ access_token, refresh_token }).redirect(FRONTEND_URI);
                res.redirect(`${FRONTEND_URI}/#${querystring.stringify({
                    access_token, refresh_token
                })}`)
            } else {
                res.redirect('/#' +
                    querystring.stringify({
                        error: 'invalid_token'
                    }));
            }
        });
    }
});

app.get('/refresh_token', function (req, res) {

    // requesting access token from refresh token
    const refresh_token = req.query.refresh_token;
    const authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: { 'Authorization': 'Basic ' + (new Buffer(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')) },
        form: {
            grant_type: 'refresh_token',
            refresh_token: refresh_token
        },
        json: true
    };

    request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            const access_token = body.access_token;
            res.send({
                'access_token': access_token
            });
        }
    });
});

app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => console.log("Server running on 8888"))