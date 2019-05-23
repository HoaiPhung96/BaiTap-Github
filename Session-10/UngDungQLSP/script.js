var app = new function() {
    this.el = document.getElementById('products');
    this.products = ['Nokia', 'Samsung', 'Xiaomi', 'Apple', 'OPPO', 'Huawei', 'OnePLus', 'Vivo'];

    this.count = function(data) {
        var el = document.getElementById('counter');
        var name = 'product';
        if (data) {
            if (data > 1) {
                name = 'products';
            }
            el.innerHTML = data + ' ' + name;
        } else {
            el.innerHTML = 'No ' + name;
        }
    };

    this.fetchAll = function() {
        var data = '';
        if (this.products.length > 0) {
            for (i = 0; i < this.products.length; i++) {
                data += '<tr>';
                data += '<td>' + (i + 1) + '</td>';
                data += '<td>' + this.products[i] + '</td>';
                data += '<td><button onclick="app.edit(' + i + ')">Edit</button></td>';
                data += '<td><button onclick="app.delete(' + i + ')">Delete</button></td>';
                data += '</tr>';
            }
        }
        this.count(this.products.length);
        return this.el.innerHTML = data;
    };

    this.add = function() {
        el = document.getElementById('add-name');
        var product = el.value;
        if (product) {
            this.products.push(product.trim());
            el.value = '';
            this.fetchAll();
        }
    };

    this.edit = function(item) {
        var el = document.getElementById('edit-name');
        el.value = this.products[item];
        document.getElementById('spoiler').style.display = 'block';
        self = this;
        document.getElementById('saveEdit').onsubmit = function() {
            var product = el.value;
            if (product) {
                self.products.splice(item, 1, product.trim());
                self.fetchAll();
                closeInput();
            }
        }
    };

    this.delete = function(item) {
        this.products.splice(item, 1);
        this.fetchAll();
    };

}
app.fetchAll();

function closeInput() {
    document.getElementById('spoiler').style.display = 'none';
}