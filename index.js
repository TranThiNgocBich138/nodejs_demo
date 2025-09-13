// Hàm hiển thị tên và tuổi
function showInfo(name, age) {
    console.log(`Tên: ${name}, Tuổi: ${age}`);
}

// Hàm tính tuổi từ năm sinh
function calcAge(yearOfBirth) {
    const currentYear = new Date().getFullYear();
    return currentYear - yearOfBirth;
}

// Gọi thử
const age1 = calcAge(2000);
showInfo("Bình", age1);

const age2 = calcAge(2002);
showInfo("Bích", age2);
