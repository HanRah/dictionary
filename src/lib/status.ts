import { rial } from "@rial-pwa-monorepo/proto";


export const dischargeStatusMapper: {
  [key: number]: string;
} = {
  [rial.DischargeStatuses.DISCHARGE_TRANSACTION_IN_PROGRESS]: 'pending',
  [rial.DischargeStatuses.DISCHARGE_AWAITING_FINANCIAL_SECTOR_CONFIRMATION]:
    'pending',
  [rial.DischargeStatuses.DISCHARGE_TRANSFER_IN_PROGRESS]: 'pending',
  [rial.DischargeStatuses.DISCHARGE_AWAITING_BANK_CONFIRMATION]:
    'در انتظار تایید بانک',

  [rial.DischargeStatuses.DISCHARGE_FINALIZED]: 'موفق',
  [rial.DischargeStatuses.DISCHARGE_TRANSACTION_FAILED]: ' ناموفق',
  [rial.DischargeStatuses.DISCHARGE_TRANSFER_FAILED]: 'ناموفق',
  [rial.DischargeStatuses.DISCHARGE_TRANSFER_NOT_CONFIRMED_BY_BANK]: 'ناموفق',
  [rial.DischargeStatuses.DISCHARGE_REJECTED_BY_FINANCIAL_SECTOR]:
    'عدم تایید بخش مالی',
  [rial.DischargeStatuses.DISCHARGE_SENT_TO_GATEWAY]: 'ارسال‌شده به درگاه',
  [rial.DischargeStatuses.UNRECOGNIZED]: 'نامعلوم',
};

export const chargeStatusMapper: {
  [key: number]: string;
} = {
  [rial.ChargeStatuses.CHARGE_FAILED]: 'ناموفق',
  [rial.ChargeStatuses.CHARGE_PENDING]: 'در انتظار پرداخت',
  [rial.ChargeStatuses.CHARGE_CONFIRMED]: 'در حال انجام',
  [rial.ChargeStatuses.CHARGE_SUSPENDED]: 'ناموفق',
  [rial.ChargeStatuses.CHARGE_SUCCESSFUL]: 'موفق',
  [rial.ChargeStatuses.CHARGE_NOT_CONFIRMED]: 'ناموفق',
  [rial.ChargeStatuses.UNRECOGNIZED]: 'نامعلوم',
};

export const transactionStatusMapper: {
  [key: number]: string;
} = {
  [rial.TransactionStatuses.PENDING]: 'در حال بررسی',
  [rial.TransactionStatuses.SUSPENDED]: 'معلق',
  [rial.TransactionStatuses.FAILED]: 'ناموفق',
  [rial.TransactionStatuses.SUCCESSFUL]: 'موفق',
  [rial.TransactionStatuses.UNRECOGNIZED]: 'نامعلوم',
};

