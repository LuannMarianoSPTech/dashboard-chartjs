const horarios = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
const temperatura = [30, 29, 28, 25, 22, 23];
const umidade = [80, 82, 80, 85, 80, 83];

new Chart(document.getElementById('graficoLinhas'), {
    type: 'line',
    data: {
        labels: horarios,
        datasets: [
            {
                label: 'Temperatura (°C)',
                data: temperatura,
                borderColor: 'red'
            },
            {
                label: 'Umidade (%)',
                data: umidade,
                borderColor: 'blue'
            }
        ]
    }
});

const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'];
const temperaturaMedia = [22, 24, 27, 23, 20, 18];
const umidadeMedia = [90, 89, 93, 87, 88, 82];

new Chart(document.getElementById('graficoBarras'), {
    type: 'bar',
    data: {
        labels: meses,
        datasets: [
            {
                label: 'Temperatura Média (°C)',
                data: temperaturaMedia,
                backgroundColor: 'red'
            },
            {
                label: 'Umidade Média (%)',
                data: umidadeMedia,
                backgroundColor: 'blue'
            }
        ]
    }
});
