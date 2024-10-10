import fetch from 'node-fetch';

const silver_flame  = 'https://raw.githubusercontent.com/zsiciarz/skyrim-alchemy-toolbox/master/data/ingredients.json'
const rusted_ring   = 'https://gist.githubusercontent.com/oscar1771/3f27e083e980d9d8357294c2d7387fc0/raw/0296abf13d206454d18f88d8283c114be8d96d2e/joseph.json'

export async function getIngredients() {
    try {
        const result = await fetch(silver_flame);
        
        return result.json()
    } catch (error) {
        console.log(error.message);  
    }
}

export async function getPlayers() {
    try {
        const result = await fetch(rusted_ring);
        return result.json()
    } catch (error) {
        console.log(error.message);  
    }
}

