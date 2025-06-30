import { useState } from "react";
import style from "./styles/OptionsPage.module.css";
import Modal from "../components/Modal";
import FileSelector from "../components/FileSelector";
const OptionsPage = () => {
  const [modalType, setModalType] = useState<
    null | "uploadFile" | "uploadFolder" | "createItem"
  >(null);

  const closeModal = () => setModalType(null);

  const renderModalContent = () => {
    switch (modalType) {
      case "uploadFile":
        return {
          header: <h2>Upload File</h2>,
          body: (
            <FileSelector
              mode="file"
              label="Choose File"
              placeholder="No file chosen"
            />
          ),
          footer: (
            <>
              <button>Upload</button>
              <button onClick={closeModal} style={{ marginLeft: "1rem" }}>
                Close
              </button>
            </>
          ),
        };

      case "uploadFolder":
        return {
          header: <h2>Upload Folder</h2>,
          body: (
            <FileSelector
              mode="folder"
              label="Select Folder"
              placeholder="No folder selected"
            />
          ),
          footer: (
            <>
              <button>Upload</button>
              <button onClick={closeModal} style={{ marginLeft: "1rem" }}>
                Close
              </button>
            </>
          ),
        };

      case "createItem":
        return {
          header: <h2>Create File/Folder</h2>,
          body: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <input placeholder="Enter name" />
              <select>
                <option value="file">File</option>
                <option value="folder">Folder</option>
              </select>
            </div>
          ),
          footer: (
            <>
              <button>Create</button>
              <button onClick={closeModal} style={{ marginLeft: "1rem" }}>
                Close
              </button>
            </>
          ),
        };

      default:
        return null;
    }
  };

  const modalContent = renderModalContent();

  return (
    <div className={style.container}>
      <div className={style.optionsContainer}>
        <ul>
          <li onClick={() => setModalType("uploadFile")}>Upload File</li>
          <li onClick={() => setModalType("uploadFolder")}>Upload Folder</li>
          <li onClick={() => setModalType("createItem")}>Create File/Folder</li>
        </ul>
      </div>

      {modalContent && (
        <Modal
          isOpen={!!modalType}
          onClose={closeModal}
          header={modalContent.header}
          body={modalContent.body}
          footer={modalContent.footer}
        />
      )}
    </div>
  );
};

export default OptionsPage;
