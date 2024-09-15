// Funcion para agregar funcionalidad al boton para mostrar la vista personalizada
odoo.define('customer_view.ProductScreen', function(require) {
    'use strict';

    const ProductScreen = require('point_of_sale.ProductScreen');
    const Registries = require('point_of_sale.Registries');

    const PosProductScreen = (ProductScreen) =>
        class extends ProductScreen {
            constructor() {
                super(...arguments);
                this.state = useState({
                    showCustomView: false, // Agrego un estado para condicionar que se muestre la vista
                });
                
            }
            // Condicion para que se muestre la vista
            toggleCustomView() {
                this.showCustomView = !this.showCustomView;
                console.log("Boton presionado");                
            }
        };

    
    
    Registries.Component.extend(ProductScreen, PosProductScreen);    
    
    return PosProductScreen;
});
