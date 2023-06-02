
async function nodes(number) {
  //contenedor de fragmentos 
  const fragment = document.createDocumentFragment();

  // Elementos del modal
  const modal = document.createElement("div");
  modal.classList = "modal fade";
  modal.id = `cellModal-${number}`;
  modal.tabIndex = "-1";
  modal.ariaLabel = "cellModalLabel";
  modal.ariaHidden = "true";

  const modalDialog = document.createElement("div");
  modalDialog.classList = "modal-dialog";

  const modalContent = document.createElement("div");
  modalContent.classList = "modal-content";

  const modalHeader = document.createElement("div");
  modalHeader.classList = "modal-header";

  const modalTitle = document.createElement("h5");
  modalTitle.classList = "modal-title";
  modalTitle.innerText = `Nota día ${number}`;

  const modalBody = document.createElement("div");
  modalBody.classList = "modal-body";

  const modalFooter = document.createElement("div");
  modalFooter.classList = "d-grid gap-2";

  const btnCancel = document.createElement("button");
  btnCancel.classList = "btn btn-danger";
  btnCancel.innerText = "Cancelar";
  btnCancel.setAttribute('data-bs-dismiss', 'modal');

  const btnNew = document.createElement("a");
  btnNew.classList = "btn btn-success";
  btnNew.innerText = "Nueva nota";
  btnNew.href = `/v1/calendar/${number}`;


  // Elementos del form

  /*
  const form = document.createElement("form");
  form.action = "/v1/calendar";
  form.method = "post";

  const formC1 = document.createElement("div");
  formC1.classList = "mb-3";

  const formC2 = document.createElement("div");
  formC2.classList = "mb-3";

  const formC3 = document.createElement("div");
  formC3.classList = "mb-3";

  const formC4 = document.createElement("div");
  formC4.classList = "mb-3";

  const id = document.createElement("input");
  id.type = "hidden";
  id.name = "day";
  id.classList = "form-control";
  id.value = number;
  
  const title = document.createElement("input");
  title.type = "text";
  title.name = "title";
  title.classList = "form-control";
  title.placeholder = "Ingrese un titulo para su nota";

  const dcrp = document.createElement("textarea");
  dcrp.name = "description";
  dcrp.placeholder = "Ingrese aquí su nota";
  dcrp.classList = "form-control";

  const sbmt = document.createElement("button");
  sbmt.innerText = "GUARDAR NOTA";
  sbmt.classList = "btn btn-success";

  formC1.appendChild(id);
  formC2.appendChild(title);
  formC3.appendChild(dcrp);
  formC4.appendChild(sbmt);
  form.append(formC1, formC2, formC3,formC4);


<%#
          

  */



  modalHeader.appendChild(modalTitle);
  modalBody.append(btnNew);
  modalFooter.append(btnCancel);
  modalContent.append(modalHeader, modalBody, modalFooter);
  modalDialog.appendChild(modalContent);
  modal.appendChild(modalDialog);
  fragment.appendChild(modal);

  const body = document.querySelector("body");
  body.appendChild(fragment);
}

const data = document.querySelector("ol");
let children = data.childNodes;
let childs = Object.entries(children);

children.forEach( async (element, index) => {
  if (element.classList) {
    if (element.classList[0] === "calendar-format_item") {
      const id = element.outerText;
      nodes(id);
    }
  }

});



/*
<div class="modal fade" id="cellModal" tabindex="-1" aria-labelledby="cellModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="cellModalLabel">
          Dejar nota al dia <%= element.day %>
        </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

        <form action="/calendar" method="POST">
          <input type="hidden" name="day" value="<%= element.day %>">
          <input type="text" class="form-control" name="title">
          <textarea name="drescription" class="form-control"></textarea>
          <input type="button" class="btn-success" value="">
        </form>

      </div>
      <div class="d-grid gap-2">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
      </div>
    </div>
  </div>
</div>
*/


