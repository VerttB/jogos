export const Embaralhar =  async (deck: Array<any>): Promise<Array<any>> => {
    const novoDeck = [...deck]
    for (let i = novoDeck.length - 1; i > 0; i--) {
        const j: number = Math.floor(Math.random() * i);
        [novoDeck[i], novoDeck[j]] = [novoDeck[j], novoDeck[i]]
    }
    return novoDeck
}