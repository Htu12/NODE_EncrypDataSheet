const ExcelJS = require('exceljs');
const fs = require('fs');
const Database = require('./db.json');
const DATA_URL = 'https://script.google.com/macros/s/AKfycby69Ny5BKti170K5zUE-AutYUU1nsfOVqq0lYe91rdl4fZL9h7xhhQLfGOUykB4w92V7g/exec?action=read&table=C%C3%A2u%20tr%E1%BA%A3%20l%E1%BB%9Di%20bi%E1%BB%83u%20m%E1%BA%ABu%201'


async function main() {
    try {
        const response = await fetch(DATA_URL);
        const j = await response.json();
        const data = j.data;

        const result = data.map(item => {
            const newRow = { phieu_id: item.row - 1 };
            const lengthDb = Database.length;

            for (let i = 1; i <= lengthDb; ++i) {
                const k = Database[i - 1].kieu;
                if (k === "a") {
                    const keys = thongKeMota(Database[i - 1]);
                    const value = item[keys];
                    newRow[i] = Database[i - 1].ma_hoa[value];
                } else if (k === "b") {
                    const lengthNewRowTypeB = Object.keys(newRow).length - 1;
                    const so_chi_bao = Database[i - 1].chi_bao.so_chi_bao;

                    for (let j = 1; j <= so_chi_bao; j++) {
                        const key = thangDo5Bac(Database[i - 1], j);
                        const value = item[key];
                        newRow[lengthNewRowTypeB + j] = value;
                    }
                } else if (k === "c") {
                    const lengthNewRowTypeC = Object.keys(newRow).length - 1;
                    const key = cauHoiDien(Database[i - 1]);
                    const value = item[key];
                    newRow[lengthNewRowTypeC + 1] = value !== "" ? 1 : -1;
                }
            }

            return newRow;
        });

        saveDataToExcel(result);
    } catch (error) {
        console.log(error);
    }
}

function thongKeMota(data) {
    const key = `${data.id}. ${data.cau_hoi}`;
    return key;
}

function thangDo5Bac(data, k) {
    const question = data.cau_hoi;
    const detail = data.chi_bao.chi_tiet[k];
    const key = `${data.id}. ${question} [${detail}]`;
    return key;
}

function cauHoiDien(data) {
    const key = `${data.id}. ${data.cau_hoi}`;
    return key;
}

async function saveDataToExcel(data) {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Data');

    worksheet.addRow(['PHIEU_SO', 'GIOI_TINH', 'TUOI', 'CTIEU_CN', 'SDUNG_SP', 'TSUAT_MUA', 'LDO_CSP', 'NOI_MUA', 'THICH_CTKM', 'BBSP_1', 'BBSP_2', 'BBSP_3', 'BBSP_4', 'CLSP_1', 'CLSP_2', 'CLSP_3', 'GIACA_1', 'GIACA_2', 'GIACA_3', 'GIACA_4', 'CTKM_1', 'CTKM_2', 'CTKM_3', 'CTKM_4', 'PHANPHOI_1', 'PHANPHOI_2', 'PHANPHOI_3', 'LOIICH_1', 'LOIICH_2', 'LOIICH_3', 'HAILONG_1', 'HAILONG_2', 'HAILONG_3', 'CHOI_DIEN']);

    data.forEach(row => {
        const rowData = [row["phieu_id"]];
        for (let i = 1; i <= 33; i++) {
            rowData.push(row[i.toString()]);
        }
        worksheet.addRow(rowData);
    });
    await workbook.xlsx.writeFile('output.xlsx');
    console.log('Dữ liệu đã được lưu vào file output.xlsx');
}

function saveJson(data) {
    fs.writeFileSync('db2.json', JSON.stringify(data, null, 4), 'utf-8');
}


// saveJson(Database)
main()
