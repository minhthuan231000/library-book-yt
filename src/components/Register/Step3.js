import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

Step3.propTypes = {
    currentStep: PropTypes.number,
};

export default function Step3(props) {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])
    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        setSelectedFile(e.target.files[0])
    }
    if (props.currentStep !== 3) {
        return null
    }
    return (
        <div className="step3">
            <div className="user__avatar" >
                <span />
                <span />
                <span />
                <span />
                <input type='file' onChange={onSelectFile} />
                {selectedFile && <img src={preview} alt="image_upload" />}
            </div>
        </div>
    );
}