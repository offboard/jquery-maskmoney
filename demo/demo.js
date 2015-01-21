$(function () {
    $(".real").maskMoney({prefix: 'R$ ', thousands: '.', decimal: ',', affixesStay: true});
    $(".euro").maskMoney({thousands: ',', decimal: '.', allowZero: true, suffix: ' €'});
    $(".mask").maskMoney();
});
