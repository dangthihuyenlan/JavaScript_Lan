const $ = document.querySelector.bind(document);

const addroom = [
    {
        phong: 1,
        loai: 'ViPPRO',
        gia: '500',
        mota: 'View Biển',
        image: "https://fantasea.vn/wp-content/uploads/2017/10/SG-DL-bynight-1024x683.jpg",
    },
    {
        phong: 2,
        loai: 'Vip01',
        gia: '1000',
        mota: 'View Cao',
        image: "https://tse2.mm.bing.net/th?id=OIP.UvrVscvayoTFT7DEgLAJ5QHaEo&pid=Api&P=0&h=180",
    },
];

const resetState = () => {
    document.getElementById('loai').value = '';
    document.getElementById('file_input').value = '';
    document.getElementById('gia').value = '';
    document.getElementById('mota').value = '';
    document.getElementById('gia').value = '';

    document.getElementById('btn-update').classList.add('hidden');
    document.getElementById('btn-create').classList.remove('hidden');

    document.getElementById('title').innerHTML = "Thêm phòng";
};

const handleRenderProducts = () => {
    document.getElementById('product').innerHTML = "";

    addroom.forEach((item, index) => {
        const productZone = document.getElementById('product');
        const trTag = document.createElement('tr');
        trTag.classList.add('odd:bg-white', 'even:bg-gray-50', 'border-b');
        trTag.innerHTML = `
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                ${item.phong}
            </th>
            <td class="px-6 py-4">
                ${item.gia}
            </td>
            <td class="px-6 py-4">
                ${item.loai}
            </td>
            <td class="px-6 py-4">
                <img class="rounded-lg w-16 h-16" src="${item.image}" alt="" />
            </td>
            <td class="px-6 py-4">
                ${item.mota}
            </td>
            <td class="px-6 py-4">
                <button class="btn-edit text-blue-500 mr-3" onclick="handleSetProductToUpdate(${item.phong})">Edit</button>
                <button class="btn-delete text-red-500 mr-3" onclick="handleDeleteProduct(${index})">Delete</button>
                <a href="/detail.html?id=${item.phong}" class="btn-detail text-red-500">Detail</a>
            </td>
        `;
        productZone.appendChild(trTag);
    });

    resetState();
};

const handleAddProduct = () => {
    const productLoai = productInfo.loai.value;
    const productImage = productInfo.file_input.files[0];
    const productMota = productInfo.mota.value;
    const productGia = productInfo.gia.value;
    const productURL = URL.createObjectURL(productImage);

    const newProduct = {
        phong: addroom.length + 1,
        loai: productLoai,
        image: productURL,
        gia: productGia,
        mota: productMota,
    };

    addroom.push(newProduct);
    handleRenderProducts();
};

const handleSetProductToUpdate = (productID) => {
    document.documentElement.scrollTop = 0;
    document.getElementById('title').innerHTML = "Sửa phòng";
    document.getElementById('btn-update').classList.remove('hidden');
    document.getElementById('btn-create').classList.add('hidden');

    const foundProduct = addroom.find(product => productID === product.phong);

    document.getElementById('loai').value = foundProduct.loai;
    document.getElementById('gia').value = foundProduct.gia;
    document.getElementById('mota').value = foundProduct.mota;
    document.getElementById('idProductUpdate').value = productID;
};

const updateProduct = () => {
    const productPhong = parseInt($("#idProductUpdate").value);
    const productLoai = productInfo.loai.value;
    const productImage = productInfo.file_input.files[0];
    const productMota = productInfo.mota.value;
    const productGia = productInfo.gia.value;

    const foundProduct = addroom.find(product => productPhong === product.phong);
    const newProduct = {
        phong: foundProduct.phong,
        loai: productLoai,
        image: productImage ? URL.createObjectURL(productImage) : foundProduct.image,
        gia: productGia,
        mota: productMota,
    };

    addroom.splice(newProduct.phong - 1, 1, newProduct);
    handleRenderProducts();
};

const handleDeleteProduct = (productID) => {
    addroom.splice(productID, 1);
    handleRenderProducts();
};

const handleGetDetail = () => {
    const query = new URLSearchParams(window.location.search);
    const product1 = addroom.find
    const product = addroom.find(product => product.id === Number(query.get("id")));
    console.log({product1});
    document.getElementById("imgDetail").src = product.image;
    document.getElementById("nameDetail").innerHTML = product1.gia + "-" + product1.loai;
    document.getElementById("oldPriceDetail").innerHTML = product1.mota;
};

document.addEventListener('DOMContentLoaded', handleRenderProducts);
