﻿var datatable;

$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    datatable = $('#tblData').DataTable({
        "ajax": {
            "url": "/Admin/User/GetAll"
        },
        "columns": [
            {
                "data": "name",
                "width": "15%"
            },
            {
                "data": "email",
                "width": "15%"
            },
            {
                "data": "phoneNumber",
                "width": "15%"
            },
            {
                "data": "company.name",
                "width": "15%"
            },
            {
                "data": "role",
                "width": "15%"
            },
            {
                "data": { id: "id", lockoutEnd: "lockoutEnd" },
                "render": function (data) {
                    var today = new Date().getTime();
                    var lockout = new Date(data.lockoutEnd).getTime();
                    if (lockout > today) {
                        // user is locked
                        return `
                    <div class="text-center">
                        <a onclick=LockUnlock('${data.id}') class="btn btn-danger text-white" style="cursor:pointer; width=60%;">
                            <i class="fas fa-lock-open"></i> Unlock 
                        </a> 
                    </div>`
                    }

                    return `
                    <div class="text-center">
                        <a onclick=LockUnlock('${data.id}') class="btn btn-success text-white" style="cursor:pointer; width=60%;">
                            <i class="fas fa-lock"></i> Lock 
                        </a> 
                    </div>`
                },
                "width": "25%"
            }
        ]
    });
}

function LockUnlock(id) {
    $.ajax({
        type: "POST",
        url: '/Admin/User/LockUnlock',
        data: JSON.stringify(id),
        contentType: "application/json",
        success: function (data) {
            if (data.success == true) {
                toastr.success(data.message);
                datatable.ajax.reload();
            }
            else {
                toastr.error(data.message);
            }
        }
    });
}