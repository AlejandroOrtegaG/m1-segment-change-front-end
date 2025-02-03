import React, { useState } from "react";
import Modal from "react-modal";
import "../styles/Hexgrid.css";
import segments from "../data/segmentsNew";
import { HexGrid, Layout, Hexagon, Text } from "react-hexgrid";
import { useNavigate } from "react-router-dom";

const coordinates = [
  { q: 0, s: 1, r: -1 },
  { q: 0, s: 2, r: -2 },
  { q: 0, s: 3, r: -3 },
  { q: 1, s: 1, r: -2 },
  { q: 1, s: 2, r: -3 },
  { q: 2, s: 1, r: -3 },
  { q: 1, s: 0, r: -1 },
  { q: 2, s: 0, r: -2 },
  { q: 3, s: 0, r: -3 },
  { q: 2, s: -1, r: -1 },
  { q: 3, s: -1, r: -2 },
  { q: 3, s: -2, r: -1 },
  { q: 1, s: -1, r: 0 },
  { q: 2, s: -2, r: 0 },
  { q: 3, s: -3, r: 0 },
  { q: 1, s: -2, r: 1 },
  { q: 2, s: -3, r: 1 },
  { q: 1, s: -3, r: 2 },
  { q: 0, s: -1, r: 1 },
  { q: 0, s: -2, r: 2 },
  { q: 0, s: -3, r: 3 },
  { q: -1, s: -1, r: 2 },
  { q: -1, s: -2, r: 3 },
  { q: -2, s: -1, r: 3 },
  { q: -1, s: 0, r: 1 },
  { q: -2, s: 0, r: 2 },
  { q: -3, s: 0, r: 3 },
  { q: -2, s: 1, r: 1 },
  { q: -3, s: 1, r: 2 },
  { q: -3, s: 2, r: 1 },
  { q: -1, s: 1, r: 0 },
  { q: -2, s: 2, r: 0 },
  { q: -3, s: 3, r: 0 },
  { q: -1, s: 2, r: -1 },
  { q: -2, s: 3, r: -1 },
  { q: -1, s: 3, r: -2 },
];

const PrechangeHexgrid = ({ selectedItems, startDates }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const navigate = useNavigate();

  const showModal = (content) => {
    setModalContent(content);
    setModalIsOpen(true);
    // console.log(modalContent.details, "modal");
    console.log(content.details);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalContent(null);
  };

  const handleEditChange = (details) => {
    navigate("/prechange-form", {
      state: details,
    });
  };
  

  return (
    <div className="hexgrid-wrapper">
      <HexGrid
        width={"1000px"}
        height={"800px"}
        className="hexgrid"
        viewBox="0 0 150 150"
        preserveAspectRatio="xMidYMid meet"
      >
        <Layout
          size={{ x: 12, y: 12 }}
          flat={true}
          spacing={1.05}
          origin={{ x: 75, y: 75 }}
        >
          {segments.map((segment, index) => {
            let segmentIndex = "";
            startDates.forEach((proposal, idx) => {
              if (proposal.refSegments.value.includes(segment.id)) {
                segmentIndex = idx;
              }
            });

            return (
              <Hexagon
                className={"prechange-segment" + segmentIndex}
                key={index}
                q={coordinates[index].q}
                s={coordinates[index].s}
                r={coordinates[index].r}
                onClick={
                  segmentIndex >= 0
                    ? () =>
                        showModal({
                          details: startDates[segmentIndex],
                          index: segmentIndex,
                        })
                    : undefined
                }
              >
                {selectedItems[0] && (
                  <Text className="prechange-segment-name" dy={5}>
                    {segment.mirror}
                  </Text>
                )}
                {selectedItems[1] && (
                  <>
                    <Text className="prechange-segment-number" dy={-1}>
                      S{segment.number}
                    </Text>
                    <Text
                      className="prechange-segment-category"
                      dx={-4.5}
                      dy={-1}
                    >
                      {segment.category}
                    </Text>
                  </>
                )}
                {selectedItems[8] && (
                  <Text className="prechange-segment-date" dy={-5}>
                    {formatDate(segment.dateModified)}
                  </Text>
                )}
              </Hexagon>
            );
          })}
        </Layout>
      </HexGrid>
      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Segment Details"
          ariaHideApp={false}
          className="custom-modal"
          overlayClassName="custom-overlay"
        >
          <div className="prechange-modal-header">
            <h2>
              Cambio de segmento {formatDate(modalContent.details.startDate)}
            </h2>
            <button onClick={closeModal} className="close-modal-button">
              <svg
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
              </svg>
            </button>
          </div>

          <div className="prechange-modal-data">
            <p>Subcelda: </p>
            <p>
              Cambio de segmentos:{" "}
              {modalContent.details.refSegments.value.join(", ")}
            </p>
            <p>
              Desde [{modalContent.details.startDate}] hasta [
              {modalContent.details.endDate}]
            </p>
            <p>Responsable: {modalContent.details.participants.leader}</p>
            <p>Técnicos: {modalContent.details.participants.electronicts}</p>
            <p>Mecánicos: {modalContent.details.participants.mechanicals}</p>
            <p>Grúa: {modalContent.details.participants.grua}</p>
            <p>
              Observaciones: El cambio de segmento se realizo correctamente y
              sin ningún tipo de problema.
            </p>
          </div>

          <div className="prechange-modal-actions">
            <button className="action-button-type-1">Marcar como hecho</button>
            <button className="action-button-type-2"> WiffleTree medido</button>
            <button className="action-button-type-1"
            onClick={() => handleEditChange( modalContent.details )}>Editar</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

function formatDate(string) {
  var options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };
  return new Date(string).toLocaleDateString([], options);
}

export default PrechangeHexgrid;
