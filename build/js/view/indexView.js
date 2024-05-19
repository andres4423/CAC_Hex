"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes = {
    '/': `  <div class="mainPage">
    <div class="imagen_promo">
      <img src="../img/promoIMG.png" alt="">
    </div>
    <div class="promo_sec">
    <p>
      Con nuestra plataforma web de agendar citas, gestionar tu agenda nunca fue tan simple. Actualiza, cancela o reserva nuevas citas con solo unos clics. Olvídate de las esperas con nuestra función de sacar tu ticket de cita. Simplifica tu vida, maximiza tu tiempo.
    </p>
  
      <div class="button_promo">
        <a href="#"><button>Agendar Cita</button></a>
      </div>
    </div>
  </div>
    `,
    '/agendar': `
    <!-- Agendar cita titulo -->
    <div class="title">
      <h1>Agenda tu cita</h1>
    </div>
    <div class="container_form">
      <!-- Formulario de agendamiento -->
      <form action="/agendar" method="POST">
        <div class="contenido">
          <div class="box">
            <label for="id">Identificación</label>
            <input type="number" name="id" id="id" required/>
          </div>
          <!-- Input Nombre -->
          <div class="box">
            <label for="nombre">Nombre completo</label>
            <input type="text" name="nombre" id="nombre" required/>
          </div>

          <!-- Input Dirección -->
          <div class="box">
            <label for="dir">Dirección</label>
            <input type="text" name="dir" id="dir" />
          </div>
          <!-- Seleccionar cita -->
          <div class="box">
            <label for="tipoCita">Tipo de cita</label>
            <select name="tipoCita" id="tipoCita">
              <option value="1">Devolución</option>
              <option value="2">Reclamo</option>
              <option value="3">Asesoria</option>
            </select>
          </div>
          <!-- Input Hora -->
          <div class="box">
            <label for="hora">Hora</label>
            <input type="time" name="hora" id="hora" required/>
          </div>
          <!-- Seleccionar lugar de cita -->
          <div class="box">
            <label for="lugarCita">Lugar</label>
            <select name="lugarCita" id="lugarCita"required>
              <option value="Bucaramanga">Oficina Bucaramanga</option>
              <option value="Bogotá">Oficina Bogotá</option>
            </select>
          </div>
          <!-- Input Edad -->
          <div class="box">
            <label for="f_nacimiento">Fecha Nacimiento</label>
            <input type="date" name="f_nacimiento" id="f_nacimiento" required/>
          </div>
          <!-- Input Fecha -->
          <div class="box">
            <label for="fecha">Fecha Cita</label>
            <input type="date" name="fecha" id="fecha" required/>
          </div>
          <!-- Input descripción -->
          <div class="box">
            <label for="descripcion">Descripción</label>
            <textarea
              name="descripcion"
              id="descripcion"
              cols="20"
              rows="2" required
            ></textarea>
          </div>
           <!-- Input contacto -->
          <div class="box">
            <label for="contacto">Celular</label>
            <input type="number" name="contacto" id="contacto" required/>
          </div>

        </div>
        <div class="enviar_inputs">
        <input type="submit" name="enviar" id="enviarCita" value="Agendar Cita">
        <input type="reset" name="reset" id="reset">
      </div>
      </form>
    </div>
    `,
    '/misCitas': `<div class="title">
    <h1>Gestiona tus citas</h1>
  </div>
  <div class="container_citas">
  <div class="cambiar">
    <p><a href="./Cambiar_cita.html">Cambiar Cita</a></p>
  </div>
  <div class="Cancelar">
    <p><a href="./cancelar_cita.html">Cancelar Cita</a></p>
  </div>
  </div>
    `,
    '/getTickets': `<!-- Apartado obtener ticket -->
    <div class="container-buscar">
      <h1>Obtener Ticket</h1>
    <div class="form_container">
      <!-- Formulario para buscar ticket -->
    <form action="#">
      <label for="identificacion">Identificación</label><br>
      <input type="text" name="identificacion" id="identificacion">
      <input type="submit"  id="enviar_form" value="Obtener Ticket">
    </form>
    </div>
    </div>
    `,
};
exports.default = routes;
