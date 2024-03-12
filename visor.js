// Obtén una referencia al elemento <model-viewer> por su ID
const modelo3D = document.getElementById("visor3D");

// Obtén una referencia a los botones por sus ID

const botonMaquina21 = document.getElementById("maquina21");
const botonMaquina2 = document.getElementById("maquina2");
const botonMaquina3 = document.getElementById("maquina3");
const botonMaquina4 = document.getElementById("maquina4");
const botonMaquina5 = document.getElementById("maquina5");
const botonMaquina6 = document.getElementById("maquina6");
const botonMaquina7 = document.getElementById("maquina7");
const botonMaquina8 = document.getElementById("maquina8");
const botonMaquina9 = document.getElementById("maquina9");
const botonMaquina10 = document.getElementById("maquina10");
const botonMaquina11 = document.getElementById("maquina11");
const botonMaquina12 = document.getElementById("maquina12");
const botonMaquina13 = document.getElementById("maquina13");
const botonMaquina14 = document.getElementById("maquina14");
const botonMaquina15 = document.getElementById("maquina15");
const botonMaquina16 = document.getElementById("maquina16");
const botonMaquina17 = document.getElementById("maquina17");
const botonMaquina18 = document.getElementById("maquina18");
const botonMaquina19 = document.getElementById("maquina19");
const botonMaquina20 = document.getElementById("maquina20");
const botonMaquina22 = document.getElementById("maquina22");


const botonCargar = document.getElementById("boton-icono_cargar");
const botonCompactar = document.getElementById("boton-icono_compactar");
const botonConformar = document.getElementById("boton-icono_conformar");
const botonExcavar = document.getElementById("boton-icono_excavar");
const botonTransportar = document.getElementById("boton-icono_transportar");

const botonInfo = document.getElementById("boton-icono_info");

    // Máquina 21
    botonMaquina21.addEventListener("click", function () {
      modelo3D.setAttribute("src", "modelos_P1/1_Compactador_300_V2.glb");
    
      botonCargar.style.display = "none";
      botonCompactar.style.display = "none";
      botonConformar.style.display = "none";
      botonExcavar.style.display = "none";
      botonTransportar.style.display = "none";
    
      botonInfo.setAttribute("data-bs-target", "#maquina21-modal");
    });
  
  
  // Máquina 2
  botonMaquina2.addEventListener("click", function () {
    modelo3D.setAttribute("src", "modelos_P1/3_Grua_RT9130E.glb");
  
    botonCargar.style.display = "none";
    botonCompactar.style.display = "none";
    botonConformar.style.display = "none";
    botonExcavar.style.display = "none";
    botonTransportar.style.display = "none";
  
    botonInfo.setAttribute("data-bs-target", "#maquina2-modal");
  });

  
  // Máquina 3
  botonMaquina3.addEventListener("click", function () {
    modelo3D.setAttribute("src", "modelos_P1/4_RodilloDoble_RWYL61BC_V2.glb");
  
    botonCargar.style.display = "none";
    botonCompactar.style.display = "none";
    botonConformar.style.display = "none";
    botonExcavar.style.display = "none";
    botonTransportar.style.display = "none";
  
    botonInfo.setAttribute("data-bs-target", "#maquina3-modal");
  });
  
  // Máquina 4
  botonMaquina4.addEventListener("click", function () {
    modelo3D.setAttribute("src", "modelos_P1/5_Perforadora_ECM370.glb");
  
    botonCargar.style.display = "none";
    botonCompactar.style.display = "none";
    botonConformar.style.display = "none";
    botonExcavar.style.display = "none";
    botonTransportar.style.display = "none";
  
    botonInfo.setAttribute("data-bs-target", "#maquina4-modal");
  });
  
  // Máquina 5
  botonMaquina5.addEventListener("click", function () {
    modelo3D.setAttribute("src", "modelos_P1/6_Excavadora_D8T.glb");
  
    botonCargar.style.display = "none";
    botonCompactar.style.display = "none";
    botonConformar.style.display = "none";
    botonExcavar.style.display = "none";
    botonTransportar.style.display = "none";
  
    botonInfo.setAttribute("data-bs-target", "#maquina5-modal");
  });
  
  // Máquina 6
  botonMaquina6.addEventListener("click", function () {
    modelo3D.setAttribute("src", "modelos_P1/7_Excavadora_336D.glb");
  
    botonCargar.style.display = "none";
    botonCompactar.style.display = "none";
    botonConformar.style.display = "none";
    botonExcavar.style.display = "none";
    botonTransportar.style.display = "none";
  
    botonInfo.setAttribute("data-bs-target", "#maquina6-modal");
  });
  
  // Máquina 7
  botonMaquina7.addEventListener("click", function () {
    modelo3D.setAttribute("src", "modelos_P1/8_MartilloHidraulico_336.glb");
  
    botonCargar.style.display = "none";
    botonCompactar.style.display = "none";
    botonConformar.style.display = "none";
    botonExcavar.style.display = "none";
    botonTransportar.style.display = "none";
  
    botonInfo.setAttribute("data-bs-target", "#maquina7-modal");
  });
  
  // Máquina 8
  botonMaquina8.addEventListener("click", function () {
    modelo3D.setAttribute("src", "modelos_P1/9_Conjunto_ExcavadorasPerforadoras.glb");
  
    botonCargar.style.display = "none";
    botonCompactar.style.display = "none";
    botonConformar.style.display = "none";
    botonExcavar.style.display = "none";
    botonTransportar.style.display = "none";
  
    botonInfo.setAttribute("data-bs-target", "#maquina8-modal");
  });
  
  // Máquina 9
  botonMaquina9.addEventListener("click", function () {
    modelo3D.setAttribute("src", "modelos_P1/10_CamionVolteo.glb");
  
    botonCargar.style.display = "none";
    botonCompactar.style.display = "none";
    botonConformar.style.display = "none";
    botonExcavar.style.display = "none";
    botonTransportar.style.display = "none";
  
    botonInfo.setAttribute("data-bs-target", "#maquina9-modal");
  });
  
  // Máquina 10
  botonMaquina10.addEventListener("click", function () {
    modelo3D.setAttribute("src", "modelos_P1/11_Grua_Hiab.glb");
  
    botonCargar.style.display = "none";
    botonCompactar.style.display = "none";
    botonConformar.style.display = "none";
    botonExcavar.style.display = "none";
    botonTransportar.style.display = "none";
  
    botonInfo.setAttribute("data-bs-target", "#maquina10-modal");
  });
  
  // Máquina 11
  botonMaquina11.addEventListener("click", function () {
    modelo3D.setAttribute("src", "modelos_P1/12_Grua_TMS700E.glb");
  
    botonCargar.style.display = "none";
    botonCompactar.style.display = "none";
    botonConformar.style.display = "none";
    botonExcavar.style.display = "none";
    botonTransportar.style.display = "none";
  
    botonInfo.setAttribute("data-bs-target", "#maquina11-modal");
  });
  
  // Máquina 12
  botonMaquina12.addEventListener("click", function () {
    modelo3D.setAttribute("src", "modelos_P1/13_PuertoVallarta2.glb");
  
    botonCargar.style.display = "none";
    botonCompactar.style.display = "none";
    botonConformar.style.display = "none";
    botonExcavar.style.display = "none";
    botonTransportar.style.display = "none";
  
    botonInfo.setAttribute("data-bs-target", "#maquina12-modal");
  });
  
  // Máquina 13
  botonMaquina13.addEventListener("click", function () {
    modelo3D.setAttribute("src", "modelos_P2/Maquina1_d.glb");
  
    botonCargar.style.display = "none";
    botonCompactar.style.display = "none";
    botonConformar.style.display = "none";
    botonExcavar.style.display = "none";
    botonTransportar.style.display = "none";
  
    botonInfo.setAttribute("data-bs-target", "#maquina13-modal");
  });
  
  // Máquina 14
  botonMaquina14.addEventListener("click", function () {
    modelo3D.setAttribute("src", "modelos_P2/Maquina2_d.glb");
  
    botonCargar.style.display = "none";
    botonCompactar.style.display = "none";
    botonConformar.style.display = "none";
    botonExcavar.style.display = "none";
    botonTransportar.style.display = "none";
  
    botonInfo.setAttribute("data-bs-target", "#maquina14-modal");
  });
  
  // Máquina 15
  botonMaquina15.addEventListener("click", function () {
    modelo3D.setAttribute("src", "modelos_P2/Maquina3_d.glb");
  
    botonCargar.style.display = "none";
    botonCompactar.style.display = "none";
    botonConformar.style.display = "none";
    botonExcavar.style.display = "none";
    botonTransportar.style.display = "none";
  
    botonInfo.setAttribute("data-bs-target", "#maquina15-modal");
  });
  
  // Máquina 16
  botonMaquina16.addEventListener("click", function () {
    modelo3D.setAttribute("src", "modelos_P2/Maquina4_d.glb");
  
    botonCargar.style.display = "none";
    botonCompactar.style.display = "none";
    botonConformar.style.display = "none";
    botonExcavar.style.display = "none";
    botonTransportar.style.display = "none";
  
    botonInfo.setAttribute("data-bs-target", "#maquina16-modal");
  });
  
  // Máquina 17
  botonMaquina17.addEventListener("click", function () {
    modelo3D.setAttribute("src", "modelos_P2/Maquina5_d.glb");
  
    botonCargar.style.display = "none";
    botonCompactar.style.display = "none";
    botonConformar.style.display = "none";
    botonExcavar.style.display = "none";
    botonTransportar.style.display = "none";
  
    botonInfo.setAttribute("data-bs-target", "#maquina17-modal");
  });
  
  // Máquina 18
  botonMaquina18.addEventListener("click", function () {
    modelo3D.setAttribute("src", "modelos_P2/Maquina6_d.glb");
  
    botonCargar.style.display = "none";
    botonCompactar.style.display = "none";
    botonConformar.style.display = "none";
    botonExcavar.style.display = "none";
    botonTransportar.style.display = "none";
  
    botonInfo.setAttribute("data-bs-target", "#maquina18-modal");
  });
  
  // Máquina 19
  botonMaquina19.addEventListener("click", function () {
    modelo3D.setAttribute("src", "modelos_P3/Modelo1_S3.glb");
  
    botonCargar.style.display = "none";
    botonCompactar.style.display = "none";
    botonConformar.style.display = "none";
    botonExcavar.style.display = "none";
    botonTransportar.style.display = "none";
  
    botonInfo.setAttribute("data-bs-target", "#maquina19-modal");
  });
  
  // Máquina 20
  botonMaquina20.addEventListener("click", function () {
    modelo3D.setAttribute("src", "modelos_P3/Modelo2_S3.glb");
  
    botonCargar.style.display = "none";
    botonCompactar.style.display = "none";
    botonConformar.style.display = "none";
    botonExcavar.style.display = "none";
    botonTransportar.style.display = "none";
  
    botonInfo.setAttribute("data-bs-target", "#maquina20-modal");
  });

    // Máquina 22
  botonMaquina22.addEventListener("click", function () {
      modelo3D.setAttribute("src", "modelos_P3/Modelo3_S3.glb");
    
      botonCargar.style.display = "none";
      botonCompactar.style.display = "none";
      botonConformar.style.display = "none";
      botonExcavar.style.display = "none";
      botonTransportar.style.display = "none";
    
      botonInfo.setAttribute("data-bs-target", "#maquina22-modal");
    });


window.addEventListener("load", function () {
    botonInfo.classList.add("heartbeat-animation");
  });
  
  // Detiene la animación cuando se hace clic en cualquier parte de la página
  document.addEventListener("click", function (event) {
    if (event.target !== botonInfo) {
      botonInfo.classList.remove("heartbeat-animation");
    }
  });