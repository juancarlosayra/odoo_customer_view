// Funcion para agregar funcionalidad al boton para mostrar la vista personalizada
odoo.define('customer_view.ProductScreen', function(require) {
    'use strict';

    const { useState } = owl;
    const ProductScreen = require('point_of_sale.ProductScreen');
    const Registries = require('point_of_sale.Registries');

    const PosProductScreen = (ProductScreen) =>
        class extends ProductScreen {
            constructor() {
                super(...arguments);
                this.state = useState({
                    showCustomView : false,
                });
                
            }
            // Condicion para que se muestre la vista
            toggleCustomView() {
                this.state.showCustomView = !this.state.showCustomView;
                console.log("Boton presionado");                
            }
        };

    
    PosProductScreen.template = 'myproductscreen';
    Registries.Component.extend(ProductScreen, PosProductScreen);    
    
    return PosProductScreen;
});
