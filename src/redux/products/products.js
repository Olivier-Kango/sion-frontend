import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API
axios.defaults.baseURL = 'https://pss-digital-backend.onrender.com/';
// axios.defaults.baseURL = 'http://[::1]:5000/';

// ACTIONS
export const getAllProducts = createAsyncThunk('GET_ALL_PRODUCTS', async () => {
  const response = await axios.get('api/v1/products');
  return response.data;
});

export const addProduct = createAsyncThunk('ADD_PRODUCT', async (product) => {
  const response = await axios.post('api/v1/products', product);
  return response.data;
});

export const deleteProduct = createAsyncThunk('DELETE_PRODUCT', async (id) => {
  await axios.delete(`api/v1/products/${id}`);
  return id;
});

export const modifyProduct = createAsyncThunk('MODIFY_PRODUCT', async ({ id, updatedProductData }) => {
  const response = await axios.put(`api/v1/products/${id}`, updatedProductData);
  const modifiedProduct = response.data;
  return modifiedProduct;
});

export const setSelectedCategory = (category) => ({
  type: 'SELECTED_CATEGORY',
  payload: category,
});

export const setSelectedSubcategory = (subcategory) => ({
  type: 'SELECTED_SUBCATEGORY',
  payload: subcategory,
});

export const showCategories = (show) => ({
  type: 'SHOW_CATEGORIES',
  payload: show,
});

export const arrowDirection = (arrow) => ({
  type: 'ARROW_DIRECTION',
  payload: arrow,
});

export const subarrowDirection = (subarrow) => ({
  type: 'SUBARROW_DIRECTION',
  payload: subarrow,
});

export const resultName = (resultName) => ({
  type: 'SET_SELECTED_PRODUCT',
  payload: resultName,
});

export const updateSearchResults = (results) => ({
  type: 'UPDATE_SEARCH_RESULTS',
  payload: results,
});

export const setSearchQuery = (query) => ({
  type: 'SET_SEARCH_QUERY',
  payload: query,
});

export const setShowLeftBar = (showLeftbar) => ({
  type: 'SET_SHOW_LEFTBAR',
  payload: showLeftbar,
});

// INITIAL STATE
const initialState = {
  selectedCategory: '',
  selectedSubcategory: '',
  showCategories: false,
  arrowDirection: 'down',
  subarrowDirection: 'right',
  resultName: '',
  results: [],
  searchQuery: '',
  showLeftBar: false,
  products: [
    {
      id: 28, name: 'Ciment Katana', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694242398/IMG_20230905_135152_676_qq2gy4.jpg', unit_price: '11.0', quantity: 22, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T06:53:33.342Z', updated_at: '2023-09-27T16:31:22.782Z', subcategory: 'Building',
    }, {
      id: 29, name: 'Ciment Hima', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694242437/t%C3%A9l%C3%A9chargement_4_sf4gcy.jpg', unit_price: '11.5', quantity: 12, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T06:54:01.164Z', updated_at: '2023-09-27T16:31:58.543Z', subcategory: 'Building',
    }, {
      id: 139, name: 'Clous à tôle (1Kg)', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695869535/images_63_fayke5.jpg', unit_price: '2.5', quantity: 21, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-28T02:52:53.791Z', updated_at: '2023-09-28T02:52:53.791Z', subcategory: 'Building',
    }, {
      id: 32, name: 'Tôle Dumuzas', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694242679/images_37_pskosf.jpg', unit_price: '7.5', quantity: 40, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T06:58:03.023Z', updated_at: '2023-09-28T03:16:50.131Z', subcategory: 'Building',
    }, {
      id: 145, name: 'Pince universelle ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695874163/images_67_sqlrl4.jpg', unit_price: '4.5', quantity: 2, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-28T04:09:45.799Z', updated_at: '2023-09-28T04:09:45.799Z', subcategory: 'Electrical',
    }, {
      id: 36, name: 'Fer à béton bar de 12', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694242850/images_40_karc3v.jpg', unit_price: '6.5', quantity: 30, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T07:01:04.588Z', updated_at: '2023-09-30T06:52:56.253Z', subcategory: 'Building',
    }, {
      id: 34, name: 'Bâche 4MX5M', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694242751/71phb8j7NaL._AC_UF1000_1000_QL80__vzfyiz.jpg', unit_price: '4.0', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T06:59:15.859Z', updated_at: '2023-10-03T14:33:02.545Z', subcategory: 'Building',
    }, {
      id: 35, name: 'Ficelle /45', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694242803/images_39_algb2e.jpg', unit_price: '2.5', quantity: 10, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T07:00:10.090Z', updated_at: '2023-10-03T14:34:24.343Z', subcategory: 'Building',
    }, {
      id: 160, name: 'Machette ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696646085/images_85_tsyg0o.jpg', unit_price: '3.0', quantity: 6, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-10-07T02:35:03.563Z', updated_at: '2023-10-07T02:35:03.563Z', subcategory: 'Tools',
    }, {
      id: 156, name: 'Cadenas Sky Yan 32mm', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696427983/images_77_yruclb.jpg', unit_price: '0.8', quantity: 12, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-10-04T13:59:48.745Z', updated_at: '2023-10-07T02:41:56.731Z', subcategory: 'General',
    }, {
      id: 154, name: 'Cadenas 50mm', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696646652/IMG_20231003_155800_461_n9bsic.jpg', unit_price: '1.4', quantity: 4, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-10-03T14:41:08.336Z', updated_at: '2023-10-07T02:44:16.880Z', subcategory: 'General',
    }, {
      id: 165, name: 'Balais gf', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696680213/t%C3%A9l%C3%A9chargement_7_o3c2im.jpg', unit_price: '3.0', quantity: 1, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-10-07T12:04:05.862Z', updated_at: '2023-10-07T12:04:05.862Z', subcategory: 'Cleaning',
    }, {
      id: 169, name: 'Balais mf', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696681213/images_91_vqczex.jpg', unit_price: '2.7', quantity: 1, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-10-07T12:20:18.275Z', updated_at: '2023-10-07T12:30:25.558Z', subcategory: 'Cleaning',
    }, {
      id: 33, name: 'Triplex ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694242712/images_38_ovxu3j.jpg', unit_price: '4.0', quantity: 50, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T06:58:36.220Z', updated_at: '2023-09-09T06:58:36.220Z', subcategory: 'Building',
    }, {
      id: 38, name: 'Fer à béton bar de 6 gdf', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694242968/images_42_g3dzax.jpg', unit_price: '3.0', quantity: 30, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T07:02:52.476Z', updated_at: '2023-09-09T07:02:52.476Z', subcategory: 'Building',
    }, {
      id: 39, name: 'Fer à béton bar de 6 ptf', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694243012/images_42_dx9xtt.jpg', unit_price: '2.0', quantity: 30, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T07:03:36.161Z', updated_at: '2023-09-09T07:03:36.161Z', subcategory: 'Building',
    }, {
      id: 140, name: 'Fils à ligaturer (1kg)', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695870006/fil-a-ligaturer-01filacicou13_1_oobzse.jpg', unit_price: '2.0', quantity: 24, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-28T03:03:21.255Z', updated_at: '2023-09-28T03:03:21.255Z', subcategory: 'Building',
    }, {
      id: 43, name: 'Kalet', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694243196/images_45_ga0iss.jpg', unit_price: '1.5', quantity: 12, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T07:06:44.457Z', updated_at: '2023-09-28T03:07:45.456Z', subcategory: 'Building',
    }, {
      id: 146, name: 'Trailli vert (1m)', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695899222/images_68_twybzn.jpg', unit_price: '3.0', quantity: 23, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-28T11:07:08.032Z', updated_at: '2023-09-28T11:07:08.032Z', subcategory: 'Building',
    }, {
      id: 41, name: 'Roofing', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694243117/images_43_a5b4pg.jpg', unit_price: '1.0', quantity: 120, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T07:05:23.644Z', updated_at: '2023-09-29T09:21:44.917Z', subcategory: 'Building',
    }, {
      id: 113, name: 'Cadenas 70mm', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694834858/614N6MbRU7L_asvkxd.jpg', unit_price: '4.5', quantity: 6, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-16T03:27:59.968Z', updated_at: '2023-10-03T14:42:32.258Z', subcategory: 'General',
    }, {
      id: 157, name: 'Cadenas 63mm', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696428005/images_78_ilbidr.jpg', unit_price: '3.0', quantity: 6, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-10-04T14:10:20.498Z', updated_at: '2023-10-04T14:10:20.498Z', subcategory: 'General',
    }, {
      id: 161, name: 'Houe', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696646140/images_87_gqtn5d.jpg', unit_price: '4.0', quantity: 6, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-10-07T02:35:43.877Z', updated_at: '2023-10-07T02:35:43.877Z', subcategory: 'Tools',
    }, {
      id: 164, name: 'Charnière n°2', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696646363/images_88_dajde7.jpg', unit_price: '0.2', quantity: 48, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-10-07T02:39:26.815Z', updated_at: '2023-10-07T02:39:26.815Z', subcategory: 'General',
    }, {
      id: 167, name: "Brosse toile d'araignée ", image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696680615/61dt3GnhFAL._AC_UL600_SR600_600__jrceha.jpg', unit_price: '2.5', quantity: 1, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-10-07T12:10:36.076Z', updated_at: '2023-10-07T12:10:36.076Z', subcategory: 'Cleaning',
    }, {
      id: 44, name: 'Pioche', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694245203/PIOCHE-ROUGE_zlsuk6.jpg', unit_price: '6.0', quantity: 6, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T07:40:08.839Z', updated_at: '2023-09-09T07:40:08.839Z', subcategory: 'Tools',
    }, {
      id: 45, name: 'Bêche ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694245246/pelle-beche-ideal-taille-1-noir-manche-en-frene_jvbexg.jpg', unit_price: '3.0', quantity: 6, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T07:40:49.786Z', updated_at: '2023-09-09T07:40:49.786Z', subcategory: 'Tools',
    }, {
      id: 42, name: 'Poignet ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694243159/images_44_ztmjdt.jpg', unit_price: '3.0', quantity: 6, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T07:06:04.162Z', updated_at: '2023-09-28T03:04:10.750Z', subcategory: 'Building',
    }, {
      id: 51, name: 'Tuyau PVC 110', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694254037/tuyau_110_qmtaxm.jpg', unit_price: '12.5', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:08:33.494Z', updated_at: '2023-09-28T03:11:20.209Z', subcategory: 'Plumbing',
    }, {
      id: 48, name: 'Mètre (3m)', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694245371/t%C3%A9l%C3%A9chargement_2_yiep2n.webp', unit_price: '1.5', quantity: 12, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T07:42:54.453Z', updated_at: '2023-09-09T07:42:54.453Z', subcategory: 'Tools',
    }, {
      id: 49, name: 'Lame de scie ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694245498/t%C3%A9l%C3%A9chargement_ygcdcg.png', unit_price: '1.5', quantity: 20, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T07:45:25.358Z', updated_at: '2023-09-09T07:45:25.358Z', subcategory: 'Tools',
    }, {
      id: 55, name: 'Tuyau PPR 3/4', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694255388/ppr_3-4_r9njs3.png', unit_price: '5.0', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:29:53.923Z', updated_at: '2023-09-09T10:29:53.923Z', subcategory: 'Plumbing',
    }, {
      id: 52, name: 'Tuyau PVC 90', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694254822/tuyau_90_rvn0o7.jpg', unit_price: '9.0', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:20:30.187Z', updated_at: '2023-09-28T03:11:49.277Z', subcategory: 'Plumbing',
    }, {
      id: 61, name: 'Té PVC 110', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694256098/t_110_nfapip.jpg', unit_price: '2.5', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:41:41.963Z', updated_at: '2023-09-09T10:41:41.963Z', subcategory: 'Plumbing',
    }, {
      id: 62, name: 'Té PVC 90', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694256142/t_110_nngpw6.jpg', unit_price: '2.5', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:42:26.291Z', updated_at: '2023-09-09T10:42:26.291Z', subcategory: 'Plumbing',
    }, {
      id: 53, name: 'Tuyau PVC 63', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694254861/tuyau_63_uijpef.jpg', unit_price: '7.0', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:21:07.052Z', updated_at: '2023-09-28T03:12:27.426Z', subcategory: 'Plumbing',
    }, {
      id: 54, name: 'Tuyau PVC 50', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694254930/tuyau_63_ux2abo.jpg', unit_price: '6.0', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:22:14.709Z', updated_at: '2023-09-28T03:12:58.049Z', subcategory: 'Plumbing',
    }, {
      id: 65, name: 'Col tangite 125g', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694256629/col_pvc_ytsazb.jpg', unit_price: '3.0', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:50:34.887Z', updated_at: '2023-09-09T10:50:34.887Z', subcategory: 'Plumbing',
    }, {
      id: 68, name: 'Té PVC 63', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694256837/t_110_vhi35i.jpg', unit_price: '1.5', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:54:02.516Z', updated_at: '2023-09-09T10:54:02.516Z', subcategory: 'Plumbing',
    }, {
      id: 69, name: 'Té PVC 50', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694256871/t_110_owwuad.jpg', unit_price: '1.5', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:54:36.205Z', updated_at: '2023-09-09T10:54:36.205Z', subcategory: 'Plumbing',
    }, {
      id: 71, name: 'Pinceau 3"', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694257149/Pinceau-3-pouces_vp2ovj.webp', unit_price: '1.0', quantity: 6, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:59:15.281Z', updated_at: '2023-09-09T10:59:15.281Z', subcategory: 'Paint',
    }, {
      id: 56, name: 'Tuyau PPR 1/2', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694255430/PPR_1_-_2_ai0es4.jpg', unit_price: '3.5', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:30:34.484Z', updated_at: '2023-09-28T03:15:24.924Z', subcategory: 'Plumbing',
    }, {
      id: 73, name: 'Rouleau peinture', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694257300/rlx_gd_dxpgt8.webp', unit_price: '2.0', quantity: 6, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T12:09:51.485Z', updated_at: '2023-09-09T12:09:51.485Z', subcategory: 'Paint',
    }, {
      id: 75, name: 'Scotch peintre', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694262075/scotch_peintre_buzd4m.jpg', unit_price: '1.0', quantity: 9, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T12:21:23.142Z', updated_at: '2023-09-09T12:21:23.142Z', subcategory: 'Paint',
    }, {
      id: 151, name: 'Ficelle /60', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696343858/images_75__1_ch8abb.jpg', unit_price: '2.5', quantity: 6, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-10-03T14:38:01.569Z', updated_at: '2023-10-03T14:38:01.569Z', subcategory: 'Building',
    }, {
      id: 57, name: 'Coude PVC 110', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694255467/coude_110_kiw9an.jpg', unit_price: '2.0', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:31:14.531Z', updated_at: '2023-09-28T03:23:38.775Z', subcategory: 'Plumbing',
    }, {
      id: 78, name: 'Powerbank Veger', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694487483/verger_fytsty.jpg', unit_price: '15.0', quantity: 2, category: 'Electronics', unit_purchase_price: null, created_at: '2023-09-12T02:58:31.671Z', updated_at: '2023-09-12T02:58:31.671Z', subcategory: 'Telephony',
    }, {
      id: 67, name: 'Té PPR 3/4', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694256702/TE-PPR_yrabyf.jpg', unit_price: '0.8', quantity: 20, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:51:47.034Z', updated_at: '2023-09-28T03:24:49.964Z', subcategory: 'Plumbing',
    }, {
      id: 80, name: 'Mineral Water Sion', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694488121/profil_svjrhj.jpg', unit_price: '4.0', quantity: 1, category: 'Mineral Water', unit_purchase_price: null, created_at: '2023-09-12T03:09:03.712Z', updated_at: '2023-09-12T03:09:03.712Z', subcategory: 'Mineral Water',
    }, {
      id: 70, name: 'Coude PVC 50 ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694256951/coude_90_pgkopi.jpg', unit_price: '1.5', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:55:55.615Z', updated_at: '2023-09-28T03:23:55.455Z', subcategory: 'Plumbing',
    }, {
      id: 82, name: 'Crème glacée', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694488762/creme_dlkpwg.jpg', unit_price: '0.25', quantity: 1, category: 'Beverage Store', unit_purchase_price: null, created_at: '2023-09-12T03:19:26.023Z', updated_at: '2023-09-12T03:19:26.023Z', subcategory: 'Beverage Store',
    }, {
      id: 83, name: 'Build a Web Site', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694489466/porfolio_olk_yuglzb.png', unit_price: '2000.0', quantity: 1, category: 'IT Services', unit_purchase_price: null, created_at: '2023-09-12T03:31:12.124Z', updated_at: '2023-09-12T03:31:12.124Z', subcategory: 'IT Services',
    }, {
      id: 84, name: 'Gas Stove', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694490075/stove_ivhhxs.jpg', unit_price: '50.0', quantity: 1, category: 'Gas Energy', unit_purchase_price: null, created_at: '2023-09-12T03:41:51.204Z', updated_at: '2023-09-12T03:41:51.204Z', subcategory: 'Gas Energy',
    }, {
      id: 86, name: 'Lapin', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694490635/lapin_gbfn3t.jpg', unit_price: '10.0', quantity: 11, category: 'Chickens', unit_purchase_price: null, created_at: '2023-09-12T03:50:52.872Z', updated_at: '2023-09-12T03:50:52.872Z', subcategory: 'Chickens',
    }, {
      id: 59, name: 'Coude PVC 63', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694255975/coude_63_rnoqxm.webp', unit_price: '1.5', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:39:45.079Z', updated_at: '2023-09-28T03:24:06.523Z', subcategory: 'Plumbing',
    }, {
      id: 58, name: 'Coude PVC 90', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694255505/coude_90_sc1fsu.jpg', unit_price: '2.0', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:31:49.375Z', updated_at: '2023-09-28T03:24:18.565Z', subcategory: 'Plumbing',
    }, {
      id: 66, name: 'Coude PPR 3/4', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694256662/coude_ppr_uqqdkm.jpg', unit_price: '0.8', quantity: 20, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:51:06.346Z', updated_at: '2023-09-28T03:24:35.270Z', subcategory: 'Plumbing',
    }, {
      id: 141, name: 'Vernis clair ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695872079/images_64_w6kiqb.jpg', unit_price: '2.5', quantity: 1, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-28T03:35:04.683Z', updated_at: '2023-09-28T03:35:04.683Z', subcategory: 'Paint',
    }, {
      id: 87, name: 'Boîte de connexion 80 X 80', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694613997/boite_de_connexion_w9eqz6.jpg', unit_price: '1.0', quantity: 12, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:06:43.139Z', updated_at: '2023-09-28T03:40:16.418Z', subcategory: 'Electrical',
    }, {
      id: 89, name: 'Socket en porcelaine ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694614115/socket_ayfrg6.jpg', unit_price: '0.4', quantity: 12, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:08:40.646Z', updated_at: '2023-09-28T03:41:21.832Z', subcategory: 'Electrical',
    }, {
      id: 88, name: 'Boîte de connexion 100 X 100', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694614041/boite_de_connexion_x5ruz5.jpg', unit_price: '1.5', quantity: 12, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:07:26.455Z', updated_at: '2023-09-28T04:01:30.176Z', subcategory: 'Electrical',
    }, {
      id: 147, name: 'Cylindre armoire ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695900881/camel_drawer_locks_gyld1j.png', unit_price: '1.5', quantity: 12, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-28T11:35:02.559Z', updated_at: '2023-09-28T11:35:02.559Z', subcategory: 'General',
    }, {
      id: 74, name: 'Peinture Basco 1/2 L', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694262015/basco_lxboqc.png', unit_price: '2.0', quantity: 24, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T12:20:28.575Z', updated_at: '2023-09-29T14:49:58.866Z', subcategory: 'Paint',
    }, {
      id: 158, name: 'Ficelle /90', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696620684/images_83_stmfju.jpg', unit_price: '8.5', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-10-06T19:32:31.682Z', updated_at: '2023-10-06T19:32:31.682Z', subcategory: 'Building',
    }, {
      id: 162, name: 'Charnière n°3', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696646253/images_89_ggwlxn.jpg', unit_price: '0.6', quantity: 24, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-10-07T02:37:58.076Z', updated_at: '2023-10-07T02:37:58.076Z', subcategory: 'General',
    }, {
      id: 94, name: 'TD 6 départs', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694615489/coffret_cs65ze.jpg', unit_price: '6.0', quantity: 1, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:31:35.202Z', updated_at: '2023-09-13T14:31:35.202Z', subcategory: 'Electrical',
    }, {
      id: 95, name: 'TD 8 départs', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694615526/coffret_qzdb0l.jpg', unit_price: '8.0', quantity: 1, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:32:13.863Z', updated_at: '2023-09-13T14:32:13.863Z', subcategory: 'Electrical',
    }, {
      id: 96, name: 'Toile isolante', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694615742/toile_ppi1th.jpg', unit_price: '0.4', quantity: 18, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:35:47.185Z', updated_at: '2023-09-13T14:35:47.185Z', subcategory: 'Electrical',
    }, {
      id: 97, name: 'Cheville 12', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694615813/cheville_zzzeht.jpg', unit_price: '2.0', quantity: 1, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:36:58.703Z', updated_at: '2023-09-13T14:36:58.703Z', subcategory: 'Electrical',
    }, {
      id: 98, name: 'Chevilles 6 \u0026 8', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694615862/cheville_nhkfsp.jpg', unit_price: '1.5', quantity: 1, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:37:51.319Z', updated_at: '2023-09-13T14:37:51.319Z', subcategory: 'Electrical',
    }, {
      id: 129, name: 'Clous de 3 ou 5cm (1Kg)', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695785002/pt_clous_newhpj.jpg', unit_price: '2.5', quantity: 24, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-27T03:23:33.475Z', updated_at: '2023-10-07T02:47:25.391Z', subcategory: 'Building',
    }, {
      id: 131, name: 'Papier émeri P60, 80, 120 (1m)', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695785149/emeri_tqgmfi.jpg', unit_price: '1.0', quantity: 25, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-27T03:25:55.145Z', updated_at: '2023-09-28T03:09:57.524Z', subcategory: 'Tools',
    }, {
      id: 102, name: 'Câble Yulan 2 X 2.5', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694616124/rouleau_imo1h5.jpg', unit_price: '40.0', quantity: 1, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:42:09.522Z', updated_at: '2023-09-13T14:42:09.522Z', subcategory: 'Electrical',
    }, {
      id: 103, name: 'Câble Yulan 2 X 1.5', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694616422/rouleau_ekpyx6.jpg', unit_price: '35.0', quantity: 1, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:47:13.361Z', updated_at: '2023-09-13T14:47:13.361Z', subcategory: 'Electrical',
    }, {
      id: 105, name: 'Vis à bois', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694616585/vis_%C3%A0_bois_crwxil.jpg', unit_price: '0.04', quantity: 725, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:49:49.444Z', updated_at: '2023-09-13T14:49:49.444Z', subcategory: 'Electrical',
    }, {
      id: 109, name: "Boîte d'encastrement", image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694616858/images_3_hwmzvg.jpg', unit_price: '0.6', quantity: 20, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:54:23.683Z', updated_at: '2023-09-13T14:54:23.683Z', subcategory: 'Electrical',
    }, {
      id: 142, name: 'Boîte de connexion 130 X 130', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695872343/images_65_j4n2fd.jpg', unit_price: '2.0', quantity: 6, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-28T03:39:27.973Z', updated_at: '2023-09-28T03:39:27.973Z', subcategory: 'Electrical',
    }, {
      id: 112, name: 'Kitofu Kale', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694834807/cylindre_kale_grzf7n.jpg', unit_price: '4.0', quantity: 4, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-16T03:26:55.837Z', updated_at: '2023-09-16T03:26:55.837Z', subcategory: 'General',
    }, {
      id: 91, name: 'Interrupteur Yaki', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694615314/interr_pz8hll.jpg', unit_price: '1.5', quantity: 10, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:28:38.327Z', updated_at: '2023-09-28T03:42:14.180Z', subcategory: 'Electrical',
    }, {
      id: 125, name: 'Interrupteur Songrui', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695023204/images_5_jbokcp.jpg', unit_price: '0.8', quantity: 10, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-18T07:46:48.837Z', updated_at: '2023-09-28T03:43:46.958Z', subcategory: 'Electrical',
    }, {
      id: 90, name: 'Prise Macvi', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694615182/prise_z1n34v.jpg', unit_price: '1.5', quantity: 10, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:27:44.108Z', updated_at: '2023-09-28T03:44:09.534Z', subcategory: 'Electrical',
    }, {
      id: 121, name: 'Super Glue Alteco', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695022381/super_glue_xhuigl.webp', unit_price: '0.32', quantity: 12, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-18T07:33:07.678Z', updated_at: '2023-09-18T07:33:07.678Z', subcategory: 'General',
    }, {
      id: 122, name: 'Cadenas Solix', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695022474/cadenas_uosdmm.jpg', unit_price: '4.0', quantity: 6, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-18T07:34:55.752Z', updated_at: '2023-09-18T07:34:55.752Z', subcategory: 'General',
    }, {
      id: 123, name: 'Jeux 7 Tournevis', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695022670/jeux_tournevis_lmfeih.webp', unit_price: '7.0', quantity: 2, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-18T07:38:14.868Z', updated_at: '2023-09-18T07:38:14.868Z', subcategory: 'Electrical',
    }, {
      id: 92, name: 'Sachet Attaches 18 mm', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694615377/attahce_gd_qnoris.jpg', unit_price: '2.5', quantity: 1, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:29:42.818Z', updated_at: '2023-09-28T03:59:55.642Z', subcategory: 'Electrical',
    }, {
      id: 127, name: 'Fiche mal Yaki', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695028441/fiche_ztbdwb.jpg', unit_price: '1.0', quantity: 10, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-18T09:25:06.763Z', updated_at: '2023-09-18T09:25:06.763Z', subcategory: 'Electrical',
    }, {
      id: 128, name: 'Fer à béton bar de 10', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695612908/images_41_vt22wb.jpg', unit_price: '5.5', quantity: 30, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-25T03:35:30.134Z', updated_at: '2023-09-25T03:35:30.134Z', subcategory: 'Building',
    }, {
      id: 132, name: 'Rouleau traillis (1m)', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695785261/traillis_mcohqc.jpg', unit_price: '2.0', quantity: 40, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-27T03:27:51.108Z', updated_at: '2023-09-27T03:27:51.108Z', subcategory: 'Building',
    }, {
      id: 133, name: 'Pinceau 2"', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695800892/pinceau_2_wszp9z.jpg', unit_price: '0.6', quantity: 6, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-27T07:48:36.505Z', updated_at: '2023-09-27T07:48:36.505Z', subcategory: 'Paint',
    }, {
      id: 135, name: 'Roulette mf', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695802852/rlx_moyen_kikmsr.jpg', unit_price: '1.2', quantity: 6, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-27T08:20:59.084Z', updated_at: '2023-09-27T08:20:59.084Z', subcategory: 'Paint',
    }, {
      id: 126, name: 'Prise Songrui', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695027949/prise_songrui_ncyxtb.jpg', unit_price: '0.8', quantity: 10, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-18T09:06:11.366Z', updated_at: '2023-09-28T03:53:54.648Z', subcategory: 'Electrical',
    }, {
      id: 104, name: 'Câble 1 x 2.5', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694616492/file_yulan_y9xwig.jpg', unit_price: '38.0', quantity: 1, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:48:48.821Z', updated_at: '2023-09-28T03:57:26.823Z', subcategory: 'Electrical',
    }, {
      id: 106, name: 'Lampe 12V (Panneau)', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694616638/panneau_yxlm3p.jpg', unit_price: '1.0', quantity: 12, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:50:42.282Z', updated_at: '2023-09-28T03:58:36.303Z', subcategory: 'Electrical',
    }, {
      id: 107, name: 'Lampe rotative multicolore ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695823522/ampoule_40w_sgpggd.jpg', unit_price: '3.5', quantity: 1, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:51:35.413Z', updated_at: '2023-09-28T03:58:55.922Z', subcategory: 'Electrical',
    }, {
      id: 93, name: 'Sachet Attaches 22mm', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694615422/attahce_gd_gfbngh.jpg', unit_price: '3.5', quantity: 1, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:30:29.254Z', updated_at: '2023-09-28T04:00:37.321Z', subcategory: 'Electrical',
    }, {
      id: 108, name: 'Boîte attaches 8 mm', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694616737/attache_bwlgvb.jpg', unit_price: '1.0', quantity: 4, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:52:21.893Z', updated_at: '2023-09-28T04:01:03.330Z', subcategory: 'Electrical',
    }, {
      id: 152, name: 'Cadenas 32mm', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696646609/IMG_20231003_155800_461_phgsrf.jpg', unit_price: '1.0', quantity: 4, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-10-03T14:39:23.447Z', updated_at: '2023-10-07T02:43:37.613Z', subcategory: 'General',
    }, {
      id: 110, name: 'Rouleau Flexible', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695873915/images_66_subyqi.jpg', unit_price: '11.0', quantity: 1, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:55:55.092Z', updated_at: '2023-09-28T04:05:42.821Z', subcategory: 'Electrical',
    }, {
      id: 115, name: 'Raclette', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694835015/raclette_mi2jbe.jpg', unit_price: '2.0', quantity: 2, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-16T03:30:21.053Z', updated_at: '2023-09-28T16:19:19.998Z', subcategory: 'Cleaning',
    }, {
      id: 117, name: 'Brosse toilette', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695021397/brosse_toilette_ihwt2w.webp', unit_price: '2.5', quantity: 2, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-18T07:19:47.074Z', updated_at: '2023-09-28T16:19:04.032Z', subcategory: 'Cleaning',
    }, {
      id: 148, name: 'BavChlore (5L)', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695917341/Bav_j0ol4q.jpg', unit_price: '2.0', quantity: 2, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-28T16:09:47.818Z', updated_at: '2023-09-30T12:48:30.977Z', subcategory: 'Cleaning',
    }, {
      id: 134, name: 'Pinceau 2.5"', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695801122/pinceau_2.5_kj2jic.png', unit_price: '0.8', quantity: 10, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-27T07:52:08.383Z', updated_at: '2023-09-29T14:50:22.645Z', subcategory: 'Paint',
    }, {
      id: 130, name: 'Clous de 5, 6, 8, 10 ou 12cm (1Kg)', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695785038/clous_lixk5z.jpg', unit_price: '2.0', quantity: 25, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-27T03:24:46.278Z', updated_at: '2023-10-07T02:48:11.443Z', subcategory: 'Building',
    }, {
      id: 136, name: 'Roulette pf', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695802883/rlx_pt_format_h1v2by.jpg', unit_price: '1.0', quantity: 6, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-27T08:21:28.076Z', updated_at: '2023-09-27T08:21:28.076Z', subcategory: 'Paint',
    }, {
      id: 137, name: 'Mètre (5m)', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695803551/5m%C3%A8tres_mkl1jr.jpg', unit_price: '3.0', quantity: 12, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-27T08:32:45.141Z', updated_at: '2023-09-27T08:32:45.141Z', subcategory: 'Tools',
    }, {
      id: 138, name: 'Rallonge', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695828099/rallonge_w5uja8.jpg', unit_price: '4.5', quantity: 2, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-27T15:21:48.204Z', updated_at: '2023-09-27T15:39:38.120Z', subcategory: 'Electrical',
    }, {
      id: 143, name: 'TD 12 départs', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695872887/coffret_qzdb0l_zbsxcq.jpg', unit_price: '12.0', quantity: 1, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-28T03:49:26.975Z', updated_at: '2023-09-28T03:49:26.975Z', subcategory: 'Electrical',
    }, {
      id: 155, name: 'Savon multi-usage (5L)', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696346640/PhotoGrid_Site_1696346588231_jaipfo.jpg', unit_price: '5.0', quantity: 10, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-10-03T15:25:44.426Z', updated_at: '2023-10-03T19:44:34.212Z', subcategory: 'Cleaning',
    }, {
      id: 159, name: 'Ficelle /18', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696620837/images_84_xcwpl9.jpg', unit_price: '1.5', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-10-07T02:24:15.775Z', updated_at: '2023-10-07T02:24:15.775Z', subcategory: 'Building',
    }, {
      id: 163, name: 'Charnière n°2.5', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696646327/51tyiFv86XL._AC_UF1000_1000_QL80__nyvfuc.jpg', unit_price: '0.4', quantity: 48, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-10-07T02:38:50.931Z', updated_at: '2023-10-07T02:38:50.931Z', subcategory: 'General',
    }, {
      id: 153, name: 'Cadenas 38mm', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696646636/IMG_20231003_155800_461_wuvev6.jpg', unit_price: '1.2', quantity: 4, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-10-03T14:40:24.645Z', updated_at: '2023-10-07T02:44:00.202Z', subcategory: 'General',
    }, {
      id: 120, name: 'Balais pf', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695022258/images_4_vfnqbi.jpg', unit_price: '2.5', quantity: 3, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-18T07:31:08.440Z', updated_at: '2023-10-07T11:59:12.675Z', subcategory: 'Cleaning',
    }, {
      id: 119, name: 'Balais en bois', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695021704/balais_planche_k7mzzf.jpg', unit_price: '2.5', quantity: 1, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-18T07:22:21.288Z', updated_at: '2023-10-07T12:08:06.558Z', subcategory: 'Cleaning',
    }, {
      id: 168, name: 'Raclette en bois ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696680881/images_90_dxshqp.jpg', unit_price: '2.0', quantity: 2, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-10-07T12:15:05.760Z', updated_at: '2023-10-07T12:15:05.760Z', subcategory: 'Cleaning',
    },
  ],
};

// REDUCER
const reducerProduct = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_PRODUCTS/fulfilled': {
      return {
        ...state,
        products: action.payload,
      };
    }
    case 'ADD_PRODUCT/fulfilled': {
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    }
    case 'DELETE_PRODUCT/fulfilled': {
      return {
        ...state,
        products: state.products.filter((f) => f.id !== action.payload),
      };
    }
    case 'SELECTED_CATEGORY': {
      return {
        ...state,
        selectedCategory: action.payload,
      };
    }
    case 'SELECTED_SUBCATEGORY': {
      return {
        ...state,
        selectedSubcategory: action.payload,
      };
    }
    case 'SHOW_CATEGORIES': {
      return {
        ...state,
        showCategories: action.payload,
      };
    }
    case 'ARROW_DIRECTION': {
      return {
        ...state,
        arrowDirection: action.payload,
      };
    }
    case 'SUBARROW_DIRECTION': {
      return {
        ...state,
        subarrowDirection: action.payload,
      };
    }
    case 'SET_SELECTED_PRODUCT': {
      return {
        ...state,
        resultName: action.payload,
      };
    }
    case 'UPDATE_SEARCH_RESULTS': {
      return {
        ...state,
        results: action.payload,
      };
    }
    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.payload,
      };
    case 'SET_SHOW_LEFTBAR':
      return {
        ...state,
        showLeftBar: action.payload,
      };
    default:
      return state;
  }
};

export default reducerProduct;
