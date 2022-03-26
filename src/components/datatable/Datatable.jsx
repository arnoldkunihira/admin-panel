import React from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";

const Datatable = () => {
    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: ()=> {
                return (
                    <div className="cellAction">
                        <Link to="/users/test" style={links}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div className="deleteButton">Delete</div>
                    </div>
                );
            }
        }
    ];

    return (
        <div className="datatable">
            <div className="datatableTitle">
                Users
                <Link to="/users/new" className="link">
                    Add New
                </Link>
            </div>
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    );
};

const links = {
    textDecoration: "none"
}

export default Datatable;