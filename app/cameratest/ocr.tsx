'use client'
import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import { createWorker } from "tesseract.js";


type WebcamProps = {
    getScreenshot: () => string;
}
type TextBox = {
    text: string;
    bbox: Tesseract.Bbox;
    isSelected: boolean;
    index: number;
}
type OCRButton = {
    width: number;
    height: number;
    words: TextBox[];
}

type OCRProps = {
    onConfirm: (imgSrc: string, totalMoney: number) => void;
}

export default function OCR({onConfirm}: OCRProps) {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState<string>("");
    const [ocrButton, setOCRButton] = useState<OCRButton|null>(null);
    const [isFront, setIsFront] = useState<boolean>(false);

    const inputRef = useRef(null);

    const restart = useCallback(() => {
        setImgSrc("");
        setOCRButton(null);
    }, []);

    function flip() {
        setIsFront(!isFront);
    }

    const capture = useCallback(async() => {
        if(webcamRef.current === null) return;
        const cam = webcamRef.current as WebcamProps;
        const base64Image = cam.getScreenshot();
        setImgSrc(base64Image);
        
        const image = new Image();
        image.src = base64Image;
        await image.decode();
        const width = image.width;
        const height = image.height;

        const worker = await createWorker('eng');
        await worker.setParameters({
            textord_min_linesize: '1',
        });
        const { data } = await worker.recognize(image);

        const extractedNumbers: TextBox[] = data.words
            .filter(word => /^\d+(\.\d+)?$/.test(word.text)) // Only get words that are numbers
            .map((word, index) => ({
            text: word.text,
            bbox: word.bbox, // Bounding box coordinates (x0, y0, x1, y1)
            isSelected: false,
            index: index
        }));

        // set the latest non 0 as true
        for(let i = extractedNumbers.length-1; i >= 0; i--) {
            if(extractedNumbers[i].text !== '0') {
                extractedNumbers[i].isSelected = true;
                break;
            }
        }

        setOCRButton({ width, height, words: extractedNumbers });

        if(!inputRef.current) return;
        (inputRef.current as HTMLInputElement).value = extractedNumbers[extractedNumbers.length-1].text;

    }, [webcamRef]);

    function onOCRButtonClick(word: TextBox) {
        const copy = ocrButton?.words.map(w => ({ ...w }));
        if(!copy) return;

        const words = copy.map(w => {
            if(w.index === word.index) {
                w.isSelected = true;
            } else {
                w.isSelected = false;
            }
            return w;
        });

        if(inputRef.current === null) return;
        console.log(word.text);
        (inputRef.current as HTMLInputElement).value = word.text;

        if(!words) return;
        setOCRButton({ width: ocrButton?.width || 0, height: ocrButton?.height || 0, words });
    }

    function onConfirmClicked() {
        if(!inputRef.current) return;
        if(!onConfirm) return;
        onConfirm(imgSrc, parseFloat((inputRef.current as HTMLInputElement).value));
    }

    return <div className="max-w-96">

{ !imgSrc ?
<Webcam ref={webcamRef} videoConstraints={!isFront ? {facingMode:  "user"} : {facingMode: { exact: "environment" }}} className="rounded-2xl" />
:
<>
<div className="relative inline-block">
    <img src={imgSrc} alt="" />
    { ocrButton?.words.map((word, index) => (<>
        <button key={index} onClick={() => onOCRButtonClick(word)} className={`absolute bg-opacity-20 border-2 border-dashed rounded-md hover:scale-110 duration-150 ease-out-back hover:bg-opacity-50 active:bg-green-600 active:border-green-600 active:bg-opacity-20 ${!word.isSelected ? 'bg-indigo-600 border-indigo-600':'bg-green-600 border-green-600'}`} style={
            {
                left: `${word.bbox.x0/ocrButton.width*100 -1}%`, 
                top: `${word.bbox.y0/ocrButton.height*100 -1}%`, 
                width: `${(word.bbox.x1-word.bbox.x0)/ocrButton.width*100 +2}%`, 
                height: `${(word.bbox.y1-word.bbox.y0)/ocrButton.height*100 +2}%`,
            }
        }>
            {/* {word.text} */}
        
        </button>
    </>)) }
</div>

</>
}

<div className="grid gap-4 mt-4">
    <div className="grid grid-cols-2 gap-4">

        {!imgSrc ?
        <button className="focus:ring-4 focus:ring-indigo-500 bg-indigo-600 rounded-xl font-bold text-slate-50 text-base hover:bg-indigo-700 hover:scale-102 dark:text-slate-50 w-full p-2 cursor-pointer disabled:bg-night-500 disabled:text-night-200 disabled:cursor-not-allowed tracking-wider flex justify-center" onClick={capture}>
            <img className="z-10 p-1 pr-2" src="https://api.iconify.design/mdi/camera.svg?color=%23ffffff" alt="" />
            Capture
        </button>
        :
        <button className="focus:ring-4 focus:ring-indigo-500 bg-indigo-600 rounded-xl font-bold text-slate-50 text-base hover:bg-indigo-700 hover:scale-102 dark:text-slate-50 w-full p-2 cursor-pointer disabled:bg-night-500 disabled:text-night-200 disabled:cursor-not-allowed tracking-wider" onClick={restart}>Recapture</button>
        }
        
        <button className="focus:ring-4 focus:ring-indigo-500 bg-indigo-600 rounded-xl font-bold text-slate-50 text-base hover:bg-indigo-700 hover:scale-102 dark:text-slate-50 w-full p-2 cursor-pointer disabled:bg-night-500 disabled:text-night-200 disabled:cursor-not-allowed tracking-wider flex justify-center" onClick={flip}>
            <img className="z-10 p-1 pr-2" src="https://api.iconify.design/mingcute/cash-2-fill.svg?color=%23ffffff" alt="" />
            Flip
        </button>
    </div>

    <div>Is this your number</div>
    <div className="relative flex gap-4">
        <img className="absolute z-10 p-3" src="https://api.iconify.design/mingcute/cash-2-fill.svg?color=%2354565c" alt="" />
        <input ref={inputRef} placeholder="Expense" type="number" className="appearance-none sm:text-sm rounded-xl block w-full bg-night-600 border-2 placeholder-night-400 text-white duration-200 drop-shadow-sm ease-out-back h-10 ring-indigo-500 hover:ring-1 border-none pl-12 outline-none focus:ring-4" />
        <button className="focus:ring-4 focus:ring-indigo-500 bg-indigo-600 rounded-xl font-bold text-slate-50 text-base hover:bg-indigo-700 hover:scale-102 dark:text-slate-50 p-2 pr-4 cursor-pointer disabled:bg-night-500 disabled:text-night-200 disabled:cursor-not-allowed tracking-wider px-4 flex justify-center" onClick={onConfirmClicked}>
            <img className="z-10 p-1 pr-2" src="https://api.iconify.design/mdi/check-bold.svg?color=%23ffffff" alt="" />
            Confirm
        </button>
        
    </div>
</div>


</div>
}