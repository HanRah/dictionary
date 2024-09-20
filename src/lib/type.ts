import { rial } from "@rial-pwa-monorepo/proto";


export const treasuryTypesMapper: {
    [key: number]: string;
} = {
    [rial.TreasuryReportsTransactionTypes.DEFAULT]: 'پیش فرض',
    [rial.TreasuryReportsTransactionTypes.DEPOSIT]: 'واریز',
    [rial.TreasuryReportsTransactionTypes.WITHDRAW]: 'برداشت',
    [rial.TreasuryReportsTransactionTypes.UNRECOGNIZED]: 'نامعلوم',
};
