window.onload = () => {
    if (!localStorage.getItem('products')) {
        generateProduct();
    }
    if (!localStorage.getItem('userList')) {
        generateUser();
    }
    if (!localStorage.getItem('cartList')) {
        generateCartList();
    }
    if (!localStorage.getItem('invoiceList')) {
        generateInvoiceList();
    }
    if (!localStorage.getItem('detailInvoiceList')) {
        generateDetailInvoiceList();
    }
}