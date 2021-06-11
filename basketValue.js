
const gift300PromoName = 'ДАРИМ300';
const discount15PromoName = 'СКИДКА15';

function calculateBasketSum(totalBasketSum, numberOfGoods, promoCode = null) {
    
    if (promoCode === gift300PromoName && totalBasketSum > 300) {
        totalBasketSum -= 300;        
    } else if (promoCode === gift300PromoName && totalBasketSum <= 300) {
        totalBasketSum = 0;        
    }
    
    if (numberOfGoods >= 10 && totalBasketSum > 0) {
        totalBasketSum = 0.95 * totalBasketSum;               
    }
    
    if (totalBasketSum > 50000){
        totalBasketSum -= 0.8 * (totalBasketSum - 50000);
    }

    if (promoCode === discount15PromoName && totalBasketSum >= 20000) {
        totalBasketSum = 0.85 * totalBasketSum;
    }
    
    // округление до 2ух знаков, чтобы при суммах 300.05 не было 0.0475000000000108 - адаптировала под деньги РБ)
    totalBasketSum = totalBasketSum.toFixed(2);
    console.log(`Сумма к оплате, с учетом скидок = ${totalBasketSum} рублей`);
}

calculateBasketSum(290, 16);
calculateBasketSum(300, 2);
calculateBasketSum(50305, 2, 'ДАРИМ300');
calculateBasketSum(1000, 15, 'ДАРИМ300');
calculateBasketSum(60400, 15, 'ДАРИМ300');
calculateBasketSum(300.05, 16, 'ДАРИМ300');
calculateBasketSum(60400, 15, 'СКИДКА15');