import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";

import Property from "../../interfaces/Property";
import "./styles.css";

    const Dropzone: React.FC<Property> = ({ onFileUploaded }) => {
        const [ selectedFileUrl, setSelectedFileUrl ] = useState("");
        const onDrop = useCallback((acceptedFiles: any) => {
            const file = acceptedFiles[0];
            const fileUrl = URL.createObjectURL(file);

                setSelectedFileUrl(fileUrl);

                    onFileUploaded(file);
        }, [ onFileUploaded ]);
        const {
            getRootProps,
            getInputProps,
                isDragActive
        } = useDropzone({
                onDrop
            });

            return (
                <div
                    className={ isDragActive ? "dropzone_active" : "dropzone" }
                        { ...getRootProps() }
                >
                    <input
                        { ...getInputProps() }
                    />

                        {
                            selectedFileUrl

                                ?
                            
                                    <img
                                        src={  selectedFileUrl}
                                            alt="Collect Point Thumbnail"
                                    />

                                        :

                                            <p>
                                                <FiUpload/>
                                                    Imagem do ponto de coleta 📸
                                            </p>
                        }
                </div>
            );
    };

        export default Dropzone;