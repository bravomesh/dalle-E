import { download } from '../assets';
import {surpriseMePrompts} from '../constant'

export function getRandomPrompt(prompt){
    const randomIndex = Math.floor(Math.random()*surpriseMePrompts.length);
    const randomPromt = surpriseMePrompts[randomIndex];
    if (randomPromt === prompt) return getRandomPrompt(prompt)
    return randomPromt
}

export async function downloadImage(_id, photo){
    FileSaver.saveAs(photo, `download-${id}.jpg`)
}