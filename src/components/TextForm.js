import React, { useState } from 'react';


export default function TextForm(props) {


    const [text, setText] = useState('');

    const upperCaseFun = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("converted to upperCase!", "success");
    };

    const lowerCaseFun = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("converted to Lower!", "success");


    };
    //remove space
    const removeExtraSpace = () => {
        let wordArr = text.split(' ').filter(word => word !== '')
        let space = wordArr.join(' ');
        setText(space);
        props.showAlert("Extra space removeed", "success");
    }
    const clearTextFun = () => {
        setText('');
        props.showAlert("text cleared!", "success");

    };

    const sentenceCaseFun = () => {
        let mycase = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        setText(mycase);
        props.showAlert("converted to SentenceCase!", "success");

    };

    const changeMe = (event) => {
        setText(event.target.value);

    };

    const copyText = () => {
        const mytext = document.getElementById('mybox');
        mytext.select();
        navigator.clipboard.writeText(mytext.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard!", "success");

    };

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className='mb-3'>
                    <textarea
                        className="form-control"
                        onChange={changeMe}
                        value={text}
                        id="mybox"
                        rows="8"
                        style={{ backgroundColor: props.mode === 'dark' ? 'rgba(0, 0, 0, 0.181)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>
                <button disabled={text.length === 0} onClick={upperCaseFun} className="btn btn-primary mx-0 my-1">UpperCase</button>
                <button disabled={text.length === 0} onClick={lowerCaseFun} className="btn btn-primary mx-1 my-1">lowerCase</button>
                <button disabled={text.length === 0} onClick={removeExtraSpace} className="btn btn-primary mx-1 my-1">removeExtraSpace</button>
                <button disabled={text.length === 0} onClick={clearTextFun} className="btn btn-primary mx-1 my-1">Clear</button>
                <button disabled={text.length === 0} onClick={sentenceCaseFun} className="btn btn-primary mx-1 my-1">sentenceCase</button>
                <button disabled={text.length === 0} onClick={copyText} className="btn btn-primary mx-1 my-1">copy-text</button>
            </div>

            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h4>Your Text Summary</h4>
                <p>word: {text.split(' ').filter((e) => { return e.length !== 0 }).length} characters: {text.length}</p>
                <p>You can read this paragraph in: {0.008 * text.split(' ').filter((e) => { return e.length !== 0 }).length} Minutes</p>
                <h2><b>preview</b></h2>
                <p><i>{text.length > 0 ? text : 'Nothing to preview :🦟'} </i></p>
            </div>
        </>
    );
}
