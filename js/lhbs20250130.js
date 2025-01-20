const alerts = [
    {
        message: "春節1/27~2/2，班次均有異動，請住戶們多加留意。",
        startTime: "2025-01-17T00:00:00", // 快訊開始顯示的時間
        endTime: "2025-02-02T23:00:00"    // 快訊結束顯示的時間
    }
];

function checkAlerts() {
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Taipei" })); // 設定台灣時區
    let activeAlert = null;

    // 檢查是否為颱風日
    if (isTyphoonDay()) {
        activeAlert = "注意：今天為颱風日，班次可能異動，請留意！";
    } else {
        // 如果不是颱風日，檢查一般快訊
        for (const alert of alerts) {
            const start = new Date(alert.startTime);
            const end = new Date(alert.endTime);

            if (now >= start && now <= end) {
                activeAlert = alert.message;
                break;
            }
        }
    }

    console.log("Current alert message:", activeAlert); // 確認 activeAlert 的值
    showTyphoonWarning(activeAlert);
}

function isTyphoonDay() {
    const today = new Date().toLocaleDateString('zh-TW', { timeZone: 'Asia/Taipei' });
    const typhoonDays = ["2024/12/31"]; // 設定颱風日的日期
    //console.log("Today's date:", today); // 顯示 today 的值
    return typhoonDays.includes(today);
}

function isChineseNYDay() {
    const today = new Date().toLocaleDateString('zh-TW', { timeZone: 'Asia/Taipei' });
    const chineseNYDays = ["2025/1/27", "2025/1/28", "2025/1/29", "2025/1/30", "2025/1/31", "2025/2/1", "2025/2/2"]; // 設定颱風日的日期
    //console.log("Today's date:", today); // 顯示 today 的值
    return chineseNYDays.includes(today);
}

function getCurrentSchedule() {
    return isChineseNYDay() ? chineseNYSchedule : normalSchedule;
    //return isTyphoonDay() ? typhoonSchedule : normalSchedule;
}

function showTyphoonWarning(message) {
    const warningBanner = document.getElementById("warning");
    if (message) {
        warningBanner.style.display = "block";
        warningBanner.querySelector('.warningInfo').innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${message}`;
    } else {
        warningBanner.style.display = "none";
    }
}

window.onload = function () {
    console.log("Page loaded"); // 確認頁面載入後的訊息
    checkAlerts();
    setInterval(checkAlerts, 30000); // 每分鐘更新一次
};

//原始班次
const normalSchedule = {
    workday: {
        to: [
        ["06:10", "社巴", "水蓮➡︎往東湖捷運站"],
        ["06:20", "社巴", "水蓮➡︎往東湖捷運站"],
        ["06:25", "F913", "國泰醫院➡︎往汐湖橋口"],
        ["06:30", "591", "水蓮➡︎往南港火車站"],
        ["06:35", "社巴", "水蓮➡︎往東湖捷運站"],
        ["06:45", "社巴", "水蓮➡︎往東湖捷運站"], 
        ["06:50", "591", "水蓮➡︎往南港火車站"],
        ["06:50", "F913延", "國泰醫院➡︎往忠三街口"],
        ["07:05", "社巴", "水蓮➡︎往東湖捷運站"],
        ["07:25", "社巴", "水蓮➡︎往東湖捷運站"],
        ["07:30", "591", "水蓮➡︎往南港火車站"],
        ["07:40", "社巴", "水蓮➡︎往東湖捷運站"], 
        ["08:00", "社巴", "水蓮➡︎往東湖捷運站"], 
        ["08:00", "591", "水蓮➡︎往南港火車站"],
        ["08:20", "社巴", "水蓮➡︎往東湖捷運站"], 
        ["08:25", "F913", "國泰醫院➡︎往汐湖橋口"],
        ["08:30", "591", "水蓮➡︎往南港火車站"],
        ["08:40", "社巴", "水蓮➡︎往東湖捷運站"],
        ["08:50", "F913延", "國泰醫院➡︎往忠三街口"],
        ["09:00", "社巴", "水蓮➡︎往東湖捷運站"],
        ["09:00", "591", "水蓮➡︎往南港火車站"],
        ["09:30", "社巴", "水蓮➡︎往東湖捷運站"], 
        ["10:00", "591", "水蓮➡︎往南港火車站"],
        ["10:25", "F913", "國泰醫院➡︎往汐湖橋口"],
        ["10:30", "社巴", "水蓮➡︎往東湖捷運站"], 
        ["10:50", "F913延", "國泰醫院➡︎往忠三街口"],
        ["11:00", "591", "水蓮➡︎往南港火車站"],
        ["11:30", "社巴", "水蓮➡︎往東湖捷運站"],
        ["12:10", "社巴", "水蓮➡︎往東湖捷運站"],
        ["12:30", "社巴", "水蓮➡︎往東湖捷運站"],
        ["13:00", "591", "水蓮➡︎往南港火車站"],
        ["13:30", "社巴", "水蓮➡︎往東湖捷運站"],
        ["14:00", "社巴", "水蓮➡︎往東湖捷運站"],
        ["14:10", "F913", "國泰醫院➡︎往汐湖橋口"],
        ["14:30", "社巴", "水蓮➡︎往東湖捷運站"],
        ["14:45", "F913延", "國泰醫院➡︎往忠三街口"],
        ["15:00", "591", "水蓮➡︎往南港火車站"],
        ["15:30", "社巴", "水蓮➡︎往東湖捷運站"],
        ["15:50", "社巴", "水蓮➡︎往東湖捷運站"],
        ["16:00", "591", "水蓮➡︎往南港火車站"],
        ["16:10", "F913", "國泰醫院➡︎往汐湖橋口"],
        ["16:20", "社巴", "水蓮➡︎往東湖捷運站"],
        ["16:45", "F913延", "國泰醫院➡︎往忠三街口"],
        ["16:50", "社巴", "水蓮➡︎往東湖捷運站"],
        ["17:00", "591", "水蓮➡︎往南港火車站"],
        ["17:20", "社巴", "水蓮➡︎往東湖捷運站"],
        ["17:40", "591", "水蓮➡︎往南港火車站"],
        ["17:45", "社巴", "水蓮➡︎往東湖捷運站"],
        ["18:10", "社巴", "水蓮➡︎往東湖捷運站"],
        ["18:10", "F913", "國泰醫院➡︎往汐湖橋口"],
        ["18:20", "591", "水蓮➡︎往南港火車站"],
        ["18:25", "社巴", "水蓮➡︎往東湖捷運站"],
        ["18:40", "社巴", "水蓮➡︎往東湖捷運站"],
        ["18:45", "F913延", "國泰醫院➡︎往忠三街口"],
        ["18:55", "社巴", "水蓮➡︎往東湖捷運站"],
        ["19:00", "591", "水蓮➡︎往南港火車站"],
        ["19:10", "社巴", "水蓮➡︎往東湖捷運站"],
        ["19:25", "社巴", "水蓮➡︎往東湖捷運站"],
        ["19:40", "社巴", "水蓮➡︎往東湖捷運站"], 
        ["20:00", "591", "水蓮➡︎往南港火車站"],
        ["20:05", "社巴", "水蓮➡︎往東湖捷運站"],
        ["20:30", "社巴", "水蓮➡︎往東湖捷運站"],
        ["20:50", "社巴", "水蓮➡︎往東湖捷運站"],
        ["21:00", "591", "水蓮➡︎往南港火車站"],
        ["21:20", "社巴", "水蓮➡︎往東湖捷運站"],
        ["21:55", "社巴", "水蓮➡︎往東湖捷運站"],
        ["22:30", "社巴", "水蓮➡︎往東湖捷運站"]
        ],
        from: [
        ["06:25", "社巴", "東湖捷運站➡︎水蓮"],
        ["06:35", "社巴", "東湖捷運站➡︎水蓮"],
        ["06:50", "社巴", "東湖捷運站➡︎水蓮"],
        ["06:50", "591", "南港火車站➡︎水蓮"],
        ["07:00", "社巴", "東湖捷運站➡︎水蓮"],
        ["07:05", "F913", "汐湖橋口➡︎往國泰醫院"],
        ["07:10", "591", "南港火車站➡︎水蓮"],
        ["07:20", "社巴", "東湖捷運站➡︎水蓮"],
        ["07:30", "F913延", "忠三街口➡︎往國泰醫院"],
        ["07:40", "社巴", "東湖捷運站➡︎水蓮"],
        ["07:50", "591", "南港火車站➡︎水蓮"],
        ["07:55", "社巴", "東湖捷運站➡︎水蓮"],
        ["08:15", "社巴", "東湖捷運站➡︎水蓮"],
        ["08:20", "591", "南港火車站➡︎水蓮"],
        ["08:35", "社巴", "東湖捷運站➡︎水蓮"],
        ["08:50", "591", "南港火車站➡︎水蓮"],
        ["08:55", "社巴", "東湖捷運站➡︎水蓮"],
        ["09:05", "F913", "汐湖橋口➡︎往國泰醫院"],
        ["09:15", "社巴", "東湖捷運站➡︎水蓮"],
        ["09:20", "591", "南港火車站➡︎水蓮"],
        ["09:30", "F913延", "忠三街口➡︎往國泰醫院"],
        ["09:45", "社巴", "東湖捷運站➡︎水蓮"],
        ["10:20", "591", "南港火車站➡︎水蓮"],
        ["10:45", "社巴", "東湖捷運站➡︎水蓮"],
        ["11:05", "F913", "汐湖橋口➡︎往國泰醫院"],
        ["11:20", "591", "南港火車站➡︎水蓮"],
        ["11:30", "F913延", "忠三街口➡︎往國泰醫院"],
        ["11:45", "社巴", "東湖捷運站➡︎水蓮"],
        ["12:25", "社巴", "東湖捷運站➡︎水蓮"],
        ["12:45", "社巴", "東湖捷運站➡︎水蓮"],
        ["13:20", "591", "南港火車站➡︎水蓮"],
        ["13:45", "社巴", "東湖捷運站➡︎水蓮"],
        ["14:15", "社巴", "東湖捷運站➡︎水蓮"],
        ["14:45", "社巴", "東湖捷運站➡︎水蓮"],
        ["14:50", "F913", "汐湖橋口➡︎往國泰醫院"],
        ["15:20", "591", "南港火車站➡︎水蓮"],
        ["15:25", "F913延", "忠三街口➡︎往國泰醫院"],
        ["15:45", "社巴", "東湖捷運站➡︎水蓮"],
        ["16:05", "社巴", "東湖捷運站➡︎水蓮"],
        ["16:20", "591", "南港火車站➡︎水蓮"],
        ["16:35", "社巴", "東湖捷運站➡︎水蓮"],
        ["16:50", "F913", "汐湖橋口➡︎往國泰醫院"],
        ["17:05", "社巴", "東湖捷運站➡︎水蓮"],
        ["17:20", "591", "南港火車站➡︎水蓮"],
        ["17:25", "F913延", "忠三街口➡︎往國泰醫院"],
        ["17:35", "社巴", "東湖捷運站➡︎水蓮"],
        ["18:00", "社巴", "東湖捷運站➡︎水蓮"],
        ["18:00", "591", "南港火車站➡︎水蓮"],
        ["18:25", "社巴", "東湖捷運站➡︎水蓮"],
        ["18:40", "社巴", "東湖捷運站➡︎水蓮"],
        ["18:40", "591", "南港火車站➡︎水蓮"],
        ["18:50", "F913", "汐湖橋口➡︎往國泰醫院"],
        ["18:55", "社巴", "東湖捷運站➡︎水蓮"],
        ["19:10", "社巴", "東湖捷運站➡︎水蓮"],
        ["19:20", "591", "南港火車站➡︎水蓮"],
        ["19:25", "社巴", "東湖捷運站➡︎水蓮"],
        ["19:25", "F913延", "忠三街口➡︎往國泰醫院"],
        ["19:40", "社巴", "東湖捷運站➡︎水蓮"],
        ["19:55", "社巴", "東湖捷運站➡︎水蓮"],
        ["20:20", "社巴", "東湖捷運站➡︎水蓮"],
        ["20:20", "591", "南港火車站➡︎水蓮"],
        ["20:45", "社巴", "東湖捷運站➡︎水蓮"],
        ["21:05", "社巴", "東湖捷運站➡︎水蓮"],
        ["21:20", "591", "南港火車站➡︎水蓮"],
        ["21:35", "社巴", "東湖捷運站➡︎水蓮"],
        ["22:10", "社巴", "東湖捷運站➡︎水蓮"],
        ["22:45", "社巴", "東湖捷運站➡︎水蓮"]
        ]
    },
    holiday: {
        to: [
        ["06:25", "F913", "國泰醫院➡︎往汐湖橋口"],
        ["06:30", "社巴", "水蓮➡︎往南港火車站"],
        ["06:50", "F913延", "國泰醫院➡︎往忠三街口"],
        ["07:00", "591", "水蓮➡︎往南港火車站"],
        ["07:30", "社巴", "水蓮➡︎往南港火車站"],
        ["08:00", "591", "水蓮➡︎往南港火車站"],
        ["08:25", "F913", "國泰醫院➡︎往汐湖橋口"],
        ["08:30", "社巴", "水蓮➡︎往南港火車站"],
        ["08:50", "F913延", "國泰醫院➡︎往忠三街口"],
        ["09:00", "591", "水蓮➡︎往南港火車站"],
        ["09:30", "社巴", "水蓮➡︎往南港火車站"],
        ["10:00", "591", "水蓮➡︎往南港火車站"],
        ["10:25", "F913", "國泰醫院➡︎往汐湖橋口"],
        ["10:30", "社巴", "水蓮➡︎往南港火車站"],
        ["10:50", "F913延", "國泰醫院➡︎往忠三街口"],
        ["11:00", "591", "水蓮➡︎往南港火車站"],
        ["11:30", "社巴", "水蓮➡︎往南港火車站"],
        ["12:00", "591", "水蓮➡︎往南港火車站"],
        ["12:30", "社巴", "水蓮➡︎往東湖捷運站"],
        ["13:00", "591", "水蓮➡︎往南港火車站"],
        ["13:40", "社巴", "水蓮➡︎往東湖捷運站"],
        ["14:00", "591", "水蓮➡︎往南港火車站"],
        ["14:10", "F913", "國泰醫院➡︎往汐湖橋口"],
        ["14:30", "社巴", "水蓮➡︎往南港火車站"],
        ["14:45", "F913延", "國泰醫院➡︎往忠三街口"],
        ["15:00", "591", "水蓮➡︎往南港火車站"],
        ["15:30", "社巴", "水蓮➡︎往南港火車站"],
        ["16:00", "591", "水蓮➡︎往南港火車站"],
        ["16:10", "F913", "國泰醫院➡︎往汐湖橋口"],
        ["16:30", "社巴", "水蓮➡︎往南港火車站"],
        ["16:45", "F913延", "國泰醫院➡︎往忠三街口"],
        ["17:00", "591", "水蓮➡︎往南港火車站"],
        ["17:30", "社巴", "水蓮➡︎往東湖捷運站"],
        ["18:00", "591", "水蓮➡︎往南港火車站"],
        ["18:10", "F913", "國泰醫院➡︎往汐湖橋口"],
        ["18:40", "社巴", "水蓮➡︎往東湖捷運站"],
        ["18:45", "F913延", "國泰醫院➡︎往忠三街口"],
        ["19:00", "591", "水蓮➡︎往南港火車站"],
        ["19:30", "社巴", "水蓮➡︎往南港火車站"],
        ["20:00", "591", "水蓮➡︎往南港火車站"],
        ["20:30", "社巴", "水蓮➡︎往南港火車站"],
        ["21:10", "社巴", "水蓮➡︎往東湖捷運站"],
        ["21:50", "社巴", "水蓮➡︎往東湖捷運站"],
        ["22:30", "社巴", "水蓮➡︎往東湖捷運站"]
        ],
        from: [
        ["06:50", "社巴", "南港火車站➡︎水蓮"],
        ["07:05", "F913", "汐湖橋口➡︎往國泰醫院"],
        ["07:20", "591", "南港火車站➡︎水蓮"],
        ["07:30", "F913延", "忠三街口➡︎往國泰醫院"],
        ["07:50", "社巴", "南港火車站➡︎水蓮"],
        ["08:20", "591", "南港火車站➡︎水蓮"],
        ["08:50", "社巴", "南港火車站➡︎水蓮"],
        ["09:05", "F913", "汐湖橋口➡︎往國泰醫院"],
        ["09:20", "591", "南港火車站➡︎水蓮"],
        ["09:30", "F913延", "忠三街口➡︎往國泰醫院"],
        ["09:50", "社巴", "南港火車站➡︎水蓮"],
        ["10:20", "591", "南港火車站➡︎水蓮"],
        ["10:50", "社巴", "南港火車站➡︎水蓮"],
        ["11:05", "F913", "汐湖橋口➡︎往國泰醫院"],
        ["11:20", "591", "南港火車站➡︎水蓮"],
        ["11:30", "F913延", "忠三街口➡︎往國泰醫院"],
        ["11:50", "社巴", "南港火車站➡︎水蓮"],
        ["12:20", "591", "南港火車站➡︎水蓮"],
        ["12:45", "社巴", "東湖捷運站➡︎水蓮"], 
        ["13:20", "591", "南港火車站➡︎水蓮"],
        ["13:55", "社巴", "東湖捷運站➡︎水蓮"], 
        ["14:20", "591", "南港火車站➡︎水蓮"],
        ["14:50", "社巴", "南港火車站➡︎水蓮"],
        ["14:50", "F913", "汐湖橋口➡︎往國泰醫院"],
        ["15:20", "591", "南港火車站➡︎水蓮"],
        ["15:25", "F913延", "忠三街口➡︎往國泰醫院"],
        ["15:50", "社巴", "南港火車站➡︎水蓮"],
        ["16:20", "591", "南港火車站➡︎水蓮"],
        ["16:50", "社巴", "南港火車站➡︎水蓮"],
        ["16:50", "F913", "汐湖橋口➡︎往國泰醫院"],
        ["17:20", "591", "南港火車站➡︎水蓮"],
        ["17:25", "F913延", "忠三街口➡︎往國泰醫院"],
        ["17:45", "社巴", "東湖捷運站➡︎水蓮"],
        ["18:20", "591", "南港火車站➡︎水蓮"],
        ["18:50", "F913", "汐湖橋口➡︎往國泰醫院"],
        ["18:55", "社巴", "東湖捷運站➡︎水蓮"], 
        ["19:20", "591", "南港火車站➡︎水蓮"],
        ["19:25", "F913延", "忠三街口➡︎往國泰醫院"],
        ["19:50", "社巴", "南港火車站➡︎水蓮"],
        ["20:20", "591", "南港火車站➡︎水蓮"],
        ["20:50", "社巴", "南港火車站➡︎水蓮"],
        ["21:25", "社巴", "東湖捷運站➡︎水蓮"], 
        ["22:05", "社巴", "東湖捷運站➡︎水蓮"],
        ["22:45", "社巴", "東湖捷運站➡︎水蓮"]
        ]
    }
};

//1.30
const chineseNYSchedule = {
    workday: {
        to: [
        ["07:00", "F913", "國泰醫院➡︎往汐湖橋口"],
        ["07:00", "F913延", "國泰醫院➡︎往忠三街口"],
        ["07:00", "591", "水蓮➡︎往南港火車站"],
        ["08:00", "591", "水蓮➡︎往南港火車站"],
        ["08:25", "F913", "國泰醫院➡︎往汐湖橋口"],
        ["08:50", "F913延", "國泰醫院➡︎往忠三街口"],
        ["09:00", "社巴", "水蓮➡︎往南港火車站"],
        ["09:00", "591", "水蓮➡︎往南港火車站"],
        ["10:00", "社巴", "水蓮➡︎往南港火車站"],
        ["10:00", "591", "水蓮➡︎往南港火車站"],
        ["10:25", "F913", "國泰醫院➡︎往汐湖橋口"],
        ["10:50", "F913延", "國泰醫院➡︎往忠三街口"],
        ["11:00", "社巴", "水蓮➡︎往南港火車站"],
        ["11:00", "591", "水蓮➡︎往南港火車站"],
        ["12:00", "社巴", "水蓮➡︎往南港火車站"],
        ["12:00", "591", "水蓮➡︎往南港火車站"],
        ["13:00", "591", "水蓮➡︎往南港火車站"],
        ["14:00", "社巴", "水蓮➡︎往東湖捷運站"],
        ["14:00", "591", "水蓮➡︎往南港火車站"],
        ["14:10", "F913", "國泰醫院➡︎往汐湖橋口"],
        ["14:45", "F913延", "國泰醫院➡︎往忠三街口"],
        ["15:00", "社巴", "水蓮➡︎往南港火車站"],
        ["15:00", "591", "水蓮➡︎往南港火車站"],
        ["16:00", "社巴", "水蓮➡︎往南港火車站"],
        ["16:00", "591", "水蓮➡︎往南港火車站"],
        ["16:10", "F913", "國泰醫院➡︎往汐湖橋口"],
        ["16:45", "F913延", "國泰醫院➡︎往忠三街口"],
        ["17:00", "社巴", "水蓮➡︎往南港火車站"],
        ["17:00", "591", "水蓮➡︎往南港火車站"],
        ["18:00", "社巴", "水蓮➡︎往南港火車站"],
        ["18:00", "591", "水蓮➡︎往南港火車站"],
        ["18:10", "F913", "國泰醫院➡︎往汐湖橋口"],
        ["19:00", "社巴", "水蓮➡︎往南港火車站"],
        ["19:00", "591", "水蓮➡︎往南港火車站"],
        ["20:00", "社巴", "水蓮➡︎往南港火車站"],
        ["20:00", "591", "水蓮➡︎往南港火車站"]
        ],
        from: [
        ["07:00", "591", "南港火車站➡︎水蓮"],
        ["07:00", "F913", "汐湖橋口➡︎往國泰醫院"],
        ["07:30", "F913延", "忠三街口➡︎往國泰醫院"],
        ["07:50", "社巴", "南港火車站➡︎水蓮"],
        ["08:00", "591", "南港火車站➡︎水蓮"],
        ["08:50", "社巴", "南港火車站➡︎水蓮"],
        ["09:00", "591", "南港火車站➡︎水蓮"],
        ["09:05", "F913", "汐湖橋口➡︎往國泰醫院"],
        ["09:20", "社巴", "南港火車站➡︎水蓮"],
        ["09:30", "F913延", "忠三街口➡︎往國泰醫院"],
        ["10:00", "591", "南港火車站➡︎水蓮"],
        ["10:20", "社巴", "南港火車站➡︎水蓮"],
        ["11:05", "F913", "汐湖橋口➡︎往國泰醫院"],
        ["11:20", "社巴", "南港火車站➡︎水蓮"],
        ["11:30", "F913延", "忠三街口➡︎往國泰醫院"],
        ["12:20", "社巴", "南港火車站➡︎水蓮"],
        ["14:20", "社巴", "南港火車站➡︎水蓮"],
        ["14:50", "F913", "汐湖橋口➡︎往國泰醫院"],
        ["15:20", "社巴", "南港火車站➡︎水蓮"],
        ["15:25", "F913延", "忠三街口➡︎往國泰醫院"],
        ["16:20", "社巴", "南港火車站➡︎水蓮"],
        ["16:50", "F913", "汐湖橋口➡︎往國泰醫院"],
        ["17:00", "591", "南港火車站➡︎水蓮"],
        ["17:20", "社巴", "南港火車站➡︎水蓮"],
        ["18:00", "591", "南港火車站➡︎水蓮"], 
        ["18:20", "社巴", "南港火車站➡︎水蓮"],
        ["19:00", "591", "南港火車站➡︎水蓮"],
        ["19:20", "社巴", "南港火車站➡︎水蓮"],
        ["20:00", "591", "南港火車站➡︎水蓮"],
        ["20:20", "社巴", "南港火車站➡︎水蓮"],
        ]
    },
    holiday: {
        to: [
        ["07:00", "F913", "國泰醫院➡︎往汐湖橋口"],
        ["07:00", "F913延", "國泰醫院➡︎往忠三街口"],
        ["07:00", "591", "水蓮➡︎往南港火車站"],
        ["08:00", "591", "水蓮➡︎往南港火車站"],
        ["08:25", "F913", "國泰醫院➡︎往汐湖橋口"],
        ["08:50", "F913延", "國泰醫院➡︎往忠三街口"],
        ["09:00", "社巴", "水蓮➡︎往南港火車站"],
        ["09:00", "591", "水蓮➡︎往南港火車站"],
        ["10:00", "社巴", "水蓮➡︎往南港火車站"],
        ["10:00", "591", "水蓮➡︎往南港火車站"],
        ["10:25", "F913", "國泰醫院➡︎往汐湖橋口"],
        ["10:50", "F913延", "國泰醫院➡︎往忠三街口"],
        ["11:00", "社巴", "水蓮➡︎往南港火車站"],
        ["11:00", "591", "水蓮➡︎往南港火車站"],
        ["12:00", "社巴", "水蓮➡︎往南港火車站"],
        ["12:00", "591", "水蓮➡︎往南港火車站"],
        ["13:00", "591", "水蓮➡︎往南港火車站"],
        ["14:00", "社巴", "水蓮➡︎往東湖捷運站"],
        ["14:00", "591", "水蓮➡︎往南港火車站"],
        ["14:10", "F913", "國泰醫院➡︎往汐湖橋口"],
        ["14:45", "F913延", "國泰醫院➡︎往忠三街口"],
        ["15:00", "社巴", "水蓮➡︎往南港火車站"],
        ["15:00", "591", "水蓮➡︎往南港火車站"],
        ["16:00", "社巴", "水蓮➡︎往南港火車站"],
        ["16:00", "591", "水蓮➡︎往南港火車站"],
        ["16:10", "F913", "國泰醫院➡︎往汐湖橋口"],
        ["16:45", "F913延", "國泰醫院➡︎往忠三街口"],
        ["17:00", "社巴", "水蓮➡︎往南港火車站"],
        ["17:00", "591", "水蓮➡︎往南港火車站"],
        ["18:00", "社巴", "水蓮➡︎往南港火車站"],
        ["18:00", "591", "水蓮➡︎往南港火車站"],
        ["18:10", "F913", "國泰醫院➡︎往汐湖橋口"],
        ["19:00", "社巴", "水蓮➡︎往南港火車站"],
        ["19:00", "591", "水蓮➡︎往南港火車站"],
        ["20:00", "社巴", "水蓮➡︎往南港火車站"],
        ["20:00", "591", "水蓮➡︎往南港火車站"]
        ],
        from: [
        ["07:00", "591", "南港火車站➡︎水蓮"],
        ["07:00", "F913", "汐湖橋口➡︎往國泰醫院"],
        ["07:30", "F913延", "忠三街口➡︎往國泰醫院"],
        ["07:50", "社巴", "南港火車站➡︎水蓮"],
        ["08:00", "591", "南港火車站➡︎水蓮"],
        ["08:50", "社巴", "南港火車站➡︎水蓮"],
        ["09:00", "591", "南港火車站➡︎水蓮"],
        ["09:05", "F913", "汐湖橋口➡︎往國泰醫院"],
        ["09:20", "社巴", "南港火車站➡︎水蓮"],
        ["09:30", "F913延", "忠三街口➡︎往國泰醫院"],
        ["10:00", "591", "南港火車站➡︎水蓮"],
        ["10:20", "社巴", "南港火車站➡︎水蓮"],
        ["11:05", "F913", "汐湖橋口➡︎往國泰醫院"],
        ["11:20", "社巴", "南港火車站➡︎水蓮"],
        ["11:30", "F913延", "忠三街口➡︎往國泰醫院"],
        ["12:20", "社巴", "南港火車站➡︎水蓮"],
        ["14:20", "社巴", "南港火車站➡︎水蓮"],
        ["14:50", "F913", "汐湖橋口➡︎往國泰醫院"],
        ["15:20", "社巴", "南港火車站➡︎水蓮"],
        ["15:25", "F913延", "忠三街口➡︎往國泰醫院"],
        ["16:20", "社巴", "南港火車站➡︎水蓮"],
        ["16:50", "F913", "汐湖橋口➡︎往國泰醫院"],
        ["17:00", "591", "南港火車站➡︎水蓮"],
        ["17:20", "社巴", "南港火車站➡︎水蓮"],
        ["18:00", "591", "南港火車站➡︎水蓮"], 
        ["18:20", "社巴", "南港火車站➡︎水蓮"],
        ["19:00", "591", "南港火車站➡︎水蓮"],
        ["19:20", "社巴", "南港火車站➡︎水蓮"],
        ["20:00", "591", "南港火車站➡︎水蓮"],
        ["20:20", "社巴", "南港火車站➡︎水蓮"],
        ]
    }
};

const typhoonSchedule = {
    workday: {
        to: [
        ["06:10", "社巴", "停駛"],
        ["06:20", "社巴", "停駛"],
        ["06:25", "F913", "停駛"],
        ["06:30", "591", "停駛"],
        ["06:35", "社巴", "停駛"],
        ["06:45", "社巴", "停駛"], 
        ["06:50", "591", "停駛"],
        ["06:50", "F913延", "停駛"],
        ["07:00", "591", "水蓮➡︎往南港火車站"],
        ["07:05", "社巴", "停駛"],
        ["07:25", "社巴", "停駛"],
        ["07:30", "591", "水蓮➡︎往南港火車站"],
        ["07:40", "社巴", "停駛"], 
        ["08:00", "社巴", "停駛"], 
        ["08:00", "591", "水蓮➡︎往南港火車站"],
        ["08:20", "社巴", "停駛"], 
        ["08:25", "F913", "停駛"],
        ["08:30", "591", "水蓮➡︎往南港火車站"],
        ["08:40", "社巴", "停駛"],
        ["08:50", "F913延", "停駛"],
        ["09:00", "社巴", "停駛"],
        ["09:00", "591", "水蓮➡︎往南港火車站"],
        ["09:30", "社巴", "停駛"], 
        ["10:00", "591", "水蓮➡︎往南港火車站"],
        ["10:25", "F913", "停駛"],
        ["10:30", "社巴", "停駛"], 
        ["10:50", "F913延", "停駛"],
        ["11:00", "591", "停駛"],
        ["11:30", "社巴", "停駛"],
        ["12:10", "社巴", "停駛"],
        ["12:30", "社巴", "停駛"],
        ["13:00", "591", "停駛"],
        ["13:30", "社巴", "停駛"],
        ["14:00", "社巴", "停駛"],
        ["14:10", "F913", "停駛"],
        ["14:30", "社巴", "停駛"],
        ["14:45", "F913延", "停駛"],
        ["15:00", "591", "停駛"],
        ["15:30", "社巴", "停駛"],
        ["15:50", "社巴", "停駛"],
        ["16:00", "591", "停駛"],
        ["16:10", "F913", "停駛"],
        ["16:20", "社巴", "停駛"],
        ["16:45", "F913延", "停駛"],
        ["16:50", "社巴", "停駛"],
        ["17:00", "591", "水蓮➡︎往南港火車站"],
        ["17:20", "社巴", "停駛"],
        ["17:40", "591", "停駛"],
        ["17:45", "社巴", "停駛"],
        ["18:00", "591", "水蓮➡︎往南港火車站"],
        ["18:10", "社巴", "停駛"],
        ["18:10", "F913", "停駛"],
        ["18:20", "591", "停駛"],
        ["18:25", "社巴", "停駛"],
        ["18:40", "社巴", "停駛"],
        ["18:45", "F913延", "停駛"],
        ["18:55", "社巴", "停駛"],
        ["19:00", "591", "水蓮➡︎往南港火車站"],
        ["19:10", "社巴", "停駛"],
        ["19:25", "社巴", "停駛"],
        ["19:40", "社巴", "停駛"], 
        ["20:00", "591", "水蓮➡︎往南港火車站"],
        ["20:05", "社巴", "停駛"],
        ["20:30", "社巴", "停駛"],
        ["20:50", "社巴", "停駛"],
        ["21:00", "591", "停駛"],
        ["21:20", "社巴", "停駛"],
        ["21:55", "社巴", "停駛"],
        ["22:30", "社巴", "停駛"]
        ],
        from: [
        ["06:25", "社巴", "停駛"],
        ["06:35", "社巴", "停駛"],
        ["06:50", "社巴", "停駛"],
        ["06:50", "591", "停駛"],
        ["07:00", "社巴", "停駛"],
        ["07:00", "591", "南港火車站➡︎水蓮"],
        ["07:05", "F913", "停駛"],
        ["07:10", "591", "停駛"],
        ["07:20", "社巴", "停駛"],
        ["07:30", "F913延", "停駛"],
        ["07:40", "社巴", "停駛"],
        ["07:50", "591", "停駛"],
        ["07:55", "社巴", "停駛"],
        ["08:00", "591", "南港火車站➡︎水蓮"],
        ["08:15", "社巴", "停駛"],
        ["08:20", "591", "停駛"],
        ["08:35", "社巴", "停駛"],
        ["08:50", "591", "停駛"],
        ["08:55", "社巴", "停駛"],
        ["09:00", "591", "南港火車站➡︎水蓮"],
        ["09:05", "F913", "停駛"],
        ["09:15", "社巴", "停駛"],
        ["09:20", "591", "停駛"],
        ["09:30", "F913延", "停駛"],
        ["09:45", "社巴", "停駛"],
        ["10:00", "591", "南港火車站➡︎水蓮"],
        ["10:20", "591", "停駛"],
        ["10:45", "社巴", "停駛"],
        ["11:05", "F913", "停駛"],
        ["11:20", "591", "停駛"],
        ["11:30", "F913延", "停駛"],
        ["11:45", "社巴", "停駛"],
        ["12:25", "社巴", "停駛"],
        ["12:45", "社巴", "停駛"],
        ["13:20", "591", "停駛"],
        ["13:45", "社巴", "停駛"],
        ["14:15", "社巴", "停駛"],
        ["14:45", "社巴", "停駛"],
        ["14:50", "F913", "停駛"],
        ["15:20", "591", "停駛"],
        ["15:25", "F913延", "停駛"],
        ["15:45", "社巴", "停駛"],
        ["16:05", "社巴", "停駛"],
        ["16:20", "591", "停駛"],
        ["16:35", "社巴", "停駛"],
        ["16:50", "F913", "停駛"],
        ["17:00", "591", "南港火車站➡︎水蓮"],
        ["17:05", "社巴", "停駛"],
        ["17:20", "591", "停駛"],
        ["17:25", "F913延", "停駛"],
        ["17:35", "社巴", "停駛"],
        ["18:00", "社巴", "停駛"],
        ["18:00", "591", "南港火車站➡︎水蓮"],
        ["18:25", "社巴", "停駛"],
        ["18:40", "社巴", "停駛"],
        ["18:40", "591", "停駛"],
        ["18:50", "F913", "停駛"],
        ["18:55", "社巴", "停駛"],
        ["19:00", "591", "南港火車站➡︎水蓮"],
        ["19:10", "社巴", "停駛"],
        ["19:20", "591", "停駛"],
        ["19:25", "社巴", "停駛"],
        ["19:25", "F913延", "停駛"],
        ["19:40", "社巴", "停駛"],
        ["19:55", "社巴", "停駛"],
        ["20:00", "591", "南港火車站➡︎水蓮"],
        ["20:20", "社巴", "停駛"],
        ["20:20", "591", "停駛"],
        ["20:45", "社巴", "停駛"],
        ["21:05", "社巴", "停駛"],
        ["21:20", "591", "停駛"],
        ["21:35", "社巴", "停駛"],
        ["22:10", "社巴", "停駛"],
        ["22:45", "社巴", "停駛"]
        ]
    },
    holiday: {
        to: [
        ["06:25", "F913", "停駛"],
        ["06:30", "社巴", "停駛"],
        ["06:50", "F913延", "停駛"],
        ["07:00", "591", "水蓮➡︎往南港火車站"],
        ["07:30", "社巴", "停駛"],
        ["08:00", "591", "水蓮➡︎往南港火車站"],
        ["08:25", "F913", "停駛"],
        ["08:30", "社巴", "停駛"],
        ["08:50", "F913延", "停駛"],
        ["09:00", "591", "水蓮➡︎往南港火車站"],
        ["09:30", "社巴", "停駛"],
        ["10:00", "591", "水蓮➡︎往南港火車站"],
        ["10:25", "F913", "停駛"],
        ["10:30", "社巴", "停駛"],
        ["10:50", "F913延", "停駛"],
        ["11:00", "591", "停駛"],
        ["11:30", "社巴", "停駛"],
        ["12:00", "591", "停駛"],
        ["12:30", "社巴", "停駛"],
        ["13:00", "591", "停駛"],
        ["13:40", "社巴", "停駛"],
        ["14:00", "591", "停駛"],
        ["14:10", "F913", "停駛"],
        ["14:30", "社巴", "停駛"],
        ["14:45", "F913延", "停駛"],
        ["15:00", "591", "停駛"],
        ["15:30", "社巴", "停駛"],
        ["16:00", "591", "停駛"],
        ["16:10", "F913", "停駛"],
        ["16:30", "社巴", "停駛"],
        ["16:45", "F913延", "停駛"],
        ["17:00", "591", "水蓮➡︎往南港火車站"],
        ["17:30", "社巴", "停駛"],
        ["18:00", "591", "水蓮➡︎往南港火車站"],
        ["18:10", "F913", "停駛"],
        ["18:40", "社巴", "停駛"],
        ["18:45", "F913延", "停駛"],
        ["19:00", "591", "水蓮➡︎往南港火車站"],
        ["19:30", "社巴", "停駛"],
        ["20:00", "591", "水蓮➡︎往南港火車站"],
        ["20:30", "社巴", "停駛"],
        ["21:10", "社巴", "停駛"],
        ["21:50", "社巴", "停駛"],
        ["22:30", "社巴", "停駛"]
        ],
        from: [
        ["06:50", "社巴", "停駛"],
        ["07:00", "591", "南港火車站➡︎水蓮"],
        ["07:05", "F913", "停駛"],
        ["07:20", "591", "停駛"],
        ["07:30", "F913延", "停駛"],
        ["07:50", "社巴", "停駛"],
        ["08:00", "591", "南港火車站➡︎水蓮"],
        ["08:20", "591", "停駛"],
        ["08:50", "社巴", "停駛"],
        ["09:00", "591", "南港火車站➡︎水蓮"],
        ["09:05", "F913", "停駛"],
        ["09:20", "591", "停駛"],
        ["09:30", "F913延", "停駛"],
        ["10:00", "591", "南港火車站➡︎水蓮"],
        ["10:20", "591", "停駛"],
        ["10:50", "社巴", "停駛"],
        ["11:05", "F913", "停駛"],
        ["11:20", "591", "停駛"],
        ["11:30", "F913延", "停駛"],
        ["11:50", "社巴", "停駛"],
        ["12:20", "591", "停駛"],
        ["12:45", "社巴", "停駛"], 
        ["13:20", "591", "停駛"],
        ["13:55", "社巴", "停駛"], 
        ["14:20", "591", "停駛"],
        ["14:50", "社巴", "停駛"],
        ["14:50", "F913", "停駛"],
        ["15:20", "591", "停駛"],
        ["15:25", "F913延", "停駛"],
        ["15:50", "社巴", "停駛"],
        ["16:20", "591", "停駛"],
        ["16:50", "社巴", "停駛"],
        ["16:50", "F913", "停駛"],
        ["17:00", "591", "南港火車站➡︎水蓮"],
        ["17:20", "591", "停駛"],
        ["17:25", "F913延", "停駛"],
        ["17:45", "社巴", "停駛"],
        ["18:00", "591", "南港火車站➡︎水蓮"],
        ["18:20", "591", "停駛"],
        ["18:50", "F913", "停駛"],
        ["18:55", "社巴", "停駛"], 
        ["19:00", "591", "南港火車站➡︎水蓮"],
        ["19:20", "591", "停駛"],
        ["19:25", "F913延", "停駛"],
        ["19:50", "社巴", "停駛"],
        ["20:00", "591", "南港火車站➡︎水蓮"],
        ["20:20", "591", "停駛"],
        ["20:50", "社巴", "停駛"],
        ["21:25", "社巴", "停駛"], 
        ["22:05", "社巴", "停駛"],
        ["22:45", "社巴", "停駛"]
        ]
    }
};

const scheduleData = getCurrentSchedule(); // 取得當前應使用的排程

// 顯示完整時刻表的函數
function displaySchedule(schedule) {
    const scheduleContainer = document.getElementById("scheduleContainer");
    scheduleContainer.innerHTML = ''; // 清空內容

    // 表頭
    const headerRow = document.createElement("div");
    headerRow.classList.add("row", "header");

    const headers = ["時間", "車輛", "出發地➡︎目的地"];
    headers.forEach(headerText => {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        // 如果是出發地和目的地的欄位，插入 Font Awesome 的箭頭
        if (headerText.includes("➡︎")) {
            const [from, to] = headerText.split("➡︎");
            cell.innerHTML = `${from} <i class="fa-solid fa-angle-right"></i> ${to}`;
        } else {
            cell.textContent = headerText; // 對於其他欄位，直接插入文字
        }

        headerRow.appendChild(cell);
    });

    scheduleContainer.appendChild(headerRow);

    // 班次資料顯示並應用動畫
    schedule.forEach(([time, cartype, destination], index) => {
        const row = document.createElement("div");
        row.classList.add("row");

        const timeCell = document.createElement("div");
        timeCell.classList.add("cell");
        timeCell.textContent = time;
        row.appendChild(timeCell);

        const vehicleCell = document.createElement("div");
        vehicleCell.classList.add("cell");
        vehicleCell.textContent = cartype;
        row.appendChild(vehicleCell);

        const routeCell = document.createElement("div");
        routeCell.classList.add("cell");
        routeCell.textContent = destination;
        row.appendChild(routeCell);

        // 拆分目的地文字
        if (destination.includes("➡︎")) {
            const [from, to] = destination.split("➡︎");
            routeCell.innerHTML = `${from} <i class="fa-solid fa-angle-right"></i> ${to}`;
        } else {
            routeCell.textContent = destination; // 對於其他欄位，直接插入文字
        }

        // 使用地標和旗幟圖示來顯示起點和終點
        //routeCell.innerHTML = `${from} <i class="fa-solid fa-angle-right"></i> ${to}`;

        // 依照車輛類型更改文字顏色
        if (cartype === "591") {
            row.style.color = "red";
        } else if (cartype === "F913" || cartype === "F913延") {
            row.style.color = "#036eb8";
        }

        scheduleContainer.appendChild(row);

        // 逐行設定延遲，讓動畫依次播放
        setTimeout(() => {
            row.classList.add("sfshow");  // 使用 .show 類來啟動翻轉效果
        }, index * 100);  // 每行延遲400ms
    });
}

// 重置時刻表，顯示完整的時刻表
function resetSchedule() {
    const schedule = getCurrentSchedule(); // 取得當前應使用的排程
    const tripType = document.querySelector('input[name="tripType"]:checked').value;
    const dayType = document.getElementById('dayType').value;
    displaySchedule(scheduleData[dayType][tripType]); // 顯示完整的時刻表
}

// 篩選最近班次的函數
function filterSchedule() {
    const schedule = getCurrentSchedule(); // 取得當前應使用的排程
    const tripType = document.querySelector('input[name="tripType"]:checked').value;
    const dayType = document.getElementById('dayType').value;
    const now = new Date(); // 取得當前完整日期和時間

    const selectedSchedule = scheduleData[dayType][tripType];

    // 過濾出比當前時間晚的班次
    const filteredData = selectedSchedule.filter(([time]) => {
        const [hours, minutes] = time.split(':').map(Number);
        const busTime = new Date(now);
        busTime.setHours(hours, minutes, 0, 0);

        // 如果班次時間早於當前時間，則過濾掉
        return busTime >= now;
    });

    // 使用篩選後的資料更新顯示
    displaySchedule(filteredData);
}

// 網頁載入時顯示完整的時刻表
document.addEventListener('DOMContentLoaded', () => {
    const isTyphoon = isTyphoonDay();
    showTyphoonWarning(isTyphoon);
    resetSchedule(); // 顯示初始完整時刻表
});

// 切換去程/回程或平日/假日時，顯示對應的完整時刻表
document.querySelectorAll('input[name="tripType"]').forEach(radio => {
    radio.addEventListener('change', () => {
        resetSchedule(); // 更新顯示完整的時刻表
    });
});

document.getElementById('dayType').addEventListener('change', () => {
    resetSchedule(); // 更新顯示完整的時刻表
});

//IMG Slider
let currentSlideIOS = 0;
let currentSlideAndroid = 0;
let autoPlayTimerIOS;  // iOS 自動播放計時器
let autoPlayTimerAndroid;  // Android 自動播放計時器

function showSlide(sliderId, slideIndex) {
    const slides = document.querySelectorAll(`#${sliderId} .slide`);
    const dots = document.querySelectorAll(`#${sliderId} .dot`);
    
    // 循環顯示
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    
    slides.forEach((slide, index) => {
        slide.classList.remove("show");
        dots[index].classList.remove("active-dot");
        if (index === slideIndex) {
            slide.classList.add("show");
            dots[index].classList.add("active-dot");
        }
    });
    
    if (sliderId === 'iosSlider') {
        currentSlideIOS = slideIndex;
    } else if (sliderId === 'androidSlider') {
        currentSlideAndroid = slideIndex;
    }
}

// 初始化 dots
function createDots(sliderId, numSlides) {
    const dotsContainer = document.querySelector(`#${sliderId} .dots`);
    for (let i = 0; i < numSlides; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            showSlide(sliderId, i);
            resetAutoPlay(sliderId); // 點擊圓點後，重置自動播放
        });
        dotsContainer.appendChild(dot);
    }
}

// 自動播放功能
function autoPlay(sliderId) {
    if (sliderId === 'iosSlider') {
        showSlide('iosSlider', currentSlideIOS + 1);
    } else if (sliderId === 'androidSlider') {
        showSlide('androidSlider', currentSlideAndroid + 1);
    }
}

// 重置自動播放計時器
function resetAutoPlay(sliderId) {
    if (sliderId === 'iosSlider') {
        clearInterval(autoPlayTimerIOS);  // 清除之前的 iOS 計時器
        autoPlayTimerIOS = setInterval(() => autoPlay('iosSlider'), 3000);  // 啟動 iOS 自動播放
    } else if (sliderId === 'androidSlider') {
        clearInterval(autoPlayTimerAndroid);  // 清除之前的 Android 計時器
        autoPlayTimerAndroid = setInterval(() => autoPlay('androidSlider'), 3000);  // 啟動 Android 自動播放
    }
}

// 初始化滑塊
document.addEventListener('DOMContentLoaded', () => {
    const iosSlides = document.querySelectorAll('#iosSlider .slide').length;
    const androidSlides = document.querySelectorAll('#androidSlider .slide').length;
    
    createDots('iosSlider', iosSlides);
    createDots('androidSlider', androidSlides);
    
    showSlide('iosSlider', currentSlideIOS);  // 初始化顯示 iOS 第一張圖片
    showSlide('androidSlider', currentSlideAndroid);  // 初始化顯示 Android 第一張圖片
    
    // 啟動自動播放
    resetAutoPlay('iosSlider');  // 啟動 iOS 自動播放
    resetAutoPlay('androidSlider');  // 啟動 Android 自動播放
});