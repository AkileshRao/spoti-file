import { css } from 'styled-components/macro'

const mixins = {
    flexCenterColumn: css`
        display: flex;
        align-items:center;
        justify-content: center;
        flex-direction: column;
    `,

    flexCenterRow: css`
        display: flex;
        align-items:center;
        justify-content: center;
        flex-direction: row;
    `,

    flexSBColumn: css`
        display: flex;
        align-items:center;
        justify-content: space-between;
        flex-direction: column;
    `,

    flexSBRow: css`
        display: flex;
        align-items:center;
        justify-content: space-between;
        flex-direction: row;
    `


}

export default mixins;