/**
 * Funçãoo para formatar uma data no formato AAAA-MM-DD
 * Usado para preencher o input do tipo date de maneira correta
 * 
 * @param {*} data data a ser formatada
 * @returns data formatada no padrão AAAA-MM-DD
 */
export function formatarData(data) {
    let dia, mes, ano = 0;

    ano = `${data.getFullYear()}`;

    if (data.getDate() < 10 && data.getMonth() + 1 < 10) {
        dia = `0${data.getDate()}`;
        mes = `0${data.getMonth() + 1}`;
    } else if (data.getDate() < 10) {
        dia = `0${data.getDate()}`;
        mes = `${data.getMonth() + 1}`;
    } else if (data.getMonth() + 1 < 10) {
        dia = `${data.getDate()}`;
        mes = `0${data.getMonth() + 1}`;
    } else {
        dia = `${data.getDate()}`;
        mes = `${data.getMonth() + 1}`;
    }

    // console.log(`${ano}-${mes}-${dia}`);
    return `${ano}-${mes}-${dia}`;
    // return { dia, mes, ano };
}