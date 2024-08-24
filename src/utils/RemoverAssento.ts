export const RemoverAssento = (texto: string): string[] => {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').split('');
};