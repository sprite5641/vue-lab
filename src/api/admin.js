import { apiURL,v1API } from '../configs/index.js'

export const adminLogin = `${apiURL}${v1API}/admin/login`

// export const confirmEntryRoom = `${apiURL}${v1API}/admin/confirm/entry-room`; //คอนเฟิมเข้าห้อง
// export const confirmLostRoom = `${apiURL}${v1API}/admin//confirm/loss-room`; //คอนเฟิมหลุดห้อง
// export const confirmManageRanking = `${apiURL}${v1API}/admin/reward/`; //คอนเฟิมจัดอันดับ rank
// export const cancelManageRank = `${apiURL}${v1API}/admin/cancel/report`; // cancle จัดอันดับ rank
// export const startTournament = `${apiURL}${v1API}/admin/confirm/start-tournament`; // startTournament
// export const refreshTokenAdmin = `${apiURL}${v1API}/admin/refresh-token`; // startTournament
// export const roomBattleDetail = `${apiURL}${v1API}/admin_battle/detail`; // room battle detail
// export const checkReportTimeoutBattle = `${apiURL}${v1API}/admin/battle/check/report-timeout`; // admin ตรวจสอบ report เป็นจริง หรือเท็จ

export default {
    adminLogin
}
