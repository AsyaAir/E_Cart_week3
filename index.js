document.addEventListener('DOMContentLoaded', () => {
    const prices = document.querySelectorAll('.price');
    const totalPriceElement = document.getElementById('total-price');
    const applyCouponButton = document.getElementById('apply-coupon');
    let totalPrice = 0;
    let couponApplied = false;

    // Записываем цены в переменные
    let price1 = +prices[0].innerHTML;
    let price2 = +prices[1].innerHTML;
    let price3 = +prices[2].innerHTML;
    let price4 = +prices[3].innerHTML;

    // Сложить значения переменных
    function calculateTotalPrice() {
        totalPrice = price1 + price2 + price3 + price4;
        totalPriceElement.innerHTML = totalPrice.toFixed(2);
    }

    // Функция, которая будет вычитать 20% от общей стоимости
    function applyCoupon() {
        if (!couponApplied) {
            totalPrice *= 0.8; // Вычитаем 20%
            totalPriceElement.innerHTML = totalPrice.toFixed(2);
            couponApplied = true;
            applyCouponButton.disabled = true; // Отключаем кнопку после применения купона
        }
    }

    // Первоначальный расчет общей стоимости
    calculateTotalPrice();

    // Метод onclick для кнопки "Использовать купон на 20%"
    applyCouponButton.onclick = applyCoupon;
});

