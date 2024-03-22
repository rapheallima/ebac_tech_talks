AOS.init();

const dataEvento = new Date("Dec 12, 2024 19:00:00")
const timeStampEvento = dataEvento.getTime()

const contaHoras = setInterval(function () {
    const agora = new Date()
    const timeStampAtual = agora.getTime()

    const distanciaEvento = timeStampEvento - timeStampAtual;

    const diaMs = 1000 * 60 * 60 * 24;
    const horaMs = 1000 * 60 * 60;
    const minutoMS = 1000 * 60;

    const diasEvento = Math.floor(distanciaEvento / diaMs);
    const horasEvento = Math.floor((distanciaEvento % diaMs) / horaMs);
    const minutosEvento = Math.floor((distanciaEvento % horaMs) / minutoMS);
    const segundosEvento = Math.floor((distanciaEvento % minutoMS) / 1000)

    console.log(diasEvento);
    console.log(horasEvento);
    console.log(minutosEvento);
    console.log(segundosEvento);

    document.getElementById('contador').innerHTML = `${diasEvento}d ${horasEvento}h ${minutosEvento}m ${segundosEvento}s`

    if (distanciaEvento < 0) {
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }

}, 1000)