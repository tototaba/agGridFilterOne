export default [
  {
    headerName: "User Id",
    field: "userId",
    sortable: true
  },
  {
    headerName: "Id",
    field: "id",
    sortable: true,
    cellRenderer: "idCellRenderrer"
  },
  {
    headerName: "Title",
    field: "title",
    sortable: true
  },
  {
    headerName: "Completion Status",
    field: "completed",
    sortable: true
  },
  {
    headerName: "Actions",
    cellRenderer: "buttonCellRenderrer",
    width: 310
  }
];
