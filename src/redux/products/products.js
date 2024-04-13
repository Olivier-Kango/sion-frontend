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
  products: [{
    id: 84, name: 'Conception site web', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1709504378/site_szikrr.png', unit_price: '2000.0', quantity: 1, category: 'IT Services', unit_purchase_price: '2000.0', created_at: '2024-03-03T22:20:03.341Z', updated_at: '2024-03-03T22:20:03.341Z', subcategory: 'IT Services',
  }, {
    id: 39, name: 'Fer à béton bar de 6 ptf', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694243012/images_42_dx9xtt.jpg', unit_price: '2.0', quantity: 30, category: 'Hardware Store', unit_purchase_price: '1.3', created_at: '2023-09-09T07:03:36.161Z', updated_at: '2023-10-09T13:52:44.972Z', subcategory: 'Building',
  }, {
    id: 171, name: 'Lampe 40W', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696861116/images_99_aufmlw.jpg', unit_price: '3.5', quantity: 2, category: 'Hardware Store', unit_purchase_price: '3.0', created_at: '2023-10-09T14:19:26.979Z', updated_at: '2023-10-09T14:20:46.271Z', subcategory: 'Electrical',
  }, {
    id: 145, name: 'Pince universelle ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695874163/images_67_sqlrl4.jpg', unit_price: '4.5', quantity: 2, category: 'Hardware Store', unit_purchase_price: '3.5', created_at: '2023-09-28T04:09:45.799Z', updated_at: '2023-10-09T14:32:59.881Z', subcategory: 'Electrical',
  }, {
    id: 28, name: 'Ciment Katana', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694242398/IMG_20230905_135152_676_qq2gy4.jpg', unit_price: '11.0', quantity: 22, category: 'Hardware Store', unit_purchase_price: '10.5', created_at: '2023-09-09T06:53:33.342Z', updated_at: '2023-10-09T13:44:25.427Z', subcategory: 'Building',
  }, {
    id: 29, name: 'Ciment Hima', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694242437/t%C3%A9l%C3%A9chargement_4_sf4gcy.jpg', unit_price: '11.5', quantity: 12, category: 'Hardware Store', unit_purchase_price: '11.0', created_at: '2023-09-09T06:54:01.164Z', updated_at: '2023-10-09T13:44:50.295Z', subcategory: 'Building',
  }, {
    id: 139, name: 'Clous à tôle (1Kg)', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695869535/images_63_fayke5.jpg', unit_price: '2.5', quantity: 21, category: 'Hardware Store', unit_purchase_price: '1.6', created_at: '2023-09-28T02:52:53.791Z', updated_at: '2023-10-09T13:46:12.058Z', subcategory: 'Building',
  }, {
    id: 32, name: 'Tôle Dumuzas', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694242679/images_37_pskosf.jpg', unit_price: '7.5', quantity: 40, category: 'Hardware Store', unit_purchase_price: '6.5', created_at: '2023-09-09T06:58:03.023Z', updated_at: '2023-10-09T13:46:26.517Z', subcategory: 'Building',
  }, {
    id: 33, name: 'Triplex ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694242712/images_38_ovxu3j.jpg', unit_price: '4.0', quantity: 50, category: 'Hardware Store', unit_purchase_price: '3.4', created_at: '2023-09-09T06:58:36.220Z', updated_at: '2023-10-09T13:46:47.092Z', subcategory: 'Building',
  }, {
    id: 35, name: 'Ficelle /45', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694242803/images_39_algb2e.jpg', unit_price: '2.5', quantity: 10, category: 'Hardware Store', unit_purchase_price: '1.8', created_at: '2023-09-09T07:00:10.090Z', updated_at: '2023-10-09T13:47:26.104Z', subcategory: 'Building',
  }, {
    id: 154, name: 'Cadenas 50mm', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696646652/IMG_20231003_155800_461_n9bsic.jpg', unit_price: '1.4', quantity: 4, category: 'Hardware Store', unit_purchase_price: '0.66', created_at: '2023-10-03T14:41:08.336Z', updated_at: '2023-10-09T14:46:19.656Z', subcategory: 'General',
  }, {
    id: 85, name: 'Conception Design', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1709504543/CNLE_-_Corrig%C3%A9e_jpg_-_Copy_2_oguuxt.jpg', unit_price: '200.0', quantity: 1, category: 'IT Services', unit_purchase_price: '200.0', created_at: '2024-03-03T22:23:25.583Z', updated_at: '2024-03-03T22:23:25.583Z', subcategory: 'IT Services',
  }, {
    id: 169, name: 'Balais mf', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696681213/images_91_vqczex.jpg', unit_price: '2.7', quantity: 1, category: 'Hardware Store', unit_purchase_price: '2.0', created_at: '2023-10-07T12:20:18.275Z', updated_at: '2023-10-09T14:48:15.674Z', subcategory: 'Cleaning',
  }, {
    id: 38, name: 'Fer à béton bar de 6 gdf', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694242968/images_42_g3dzax.jpg', unit_price: '2.5', quantity: 30, category: 'Hardware Store', unit_purchase_price: '2.2', created_at: '2023-09-09T07:02:52.476Z', updated_at: '2023-10-12T11:44:43.001Z', subcategory: 'Building',
  }, {
    id: 86, name: 'Creation logos', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1709504677/logo_ampoule_new_light_engineering_png_u5wk02.png', unit_price: '100.0', quantity: 1, category: 'IT Services', unit_purchase_price: '100.0', created_at: '2024-03-03T22:24:59.537Z', updated_at: '2024-03-03T22:24:59.537Z', subcategory: 'IT Services',
  }, {
    id: 156, name: 'Cadenas Sky Yan 32mm', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696427983/images_77_yruclb.jpg', unit_price: '0.8', quantity: 12, category: 'Hardware Store', unit_purchase_price: '0.4', created_at: '2023-10-04T13:59:48.745Z', updated_at: '2023-10-12T12:27:17.050Z', subcategory: 'General',
  }, {
    id: 160, name: 'Machette ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696646085/images_85_tsyg0o.jpg', unit_price: '3.0', quantity: 6, category: 'Hardware Store', unit_purchase_price: '1.5', created_at: '2023-10-07T02:35:03.563Z', updated_at: '2023-10-12T12:45:36.200Z', subcategory: 'Tools',
  }, {
    id: 175, name: 'Scie à métaux ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1698315797/images_-_2023-10-26T122257.996_evvijs.jpg', unit_price: '3.0', quantity: 1, category: 'Hardware Store', unit_purchase_price: '2.0', created_at: '2023-10-26T10:23:58.119Z', updated_at: '2023-10-26T10:23:58.119Z', subcategory: 'Tools',
  }, {
    id: 151, name: 'Ficelle /60', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696343858/images_75__1_ch8abb.jpg', unit_price: '2.5', quantity: 6, category: 'Hardware Store', unit_purchase_price: '1.8', created_at: '2023-10-03T14:38:01.569Z', updated_at: '2023-10-09T13:50:19.500Z', subcategory: 'Building',
  }, {
    id: 41, name: 'Roofing', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694243117/images_43_a5b4pg.jpg', unit_price: '1.0', quantity: 120, category: 'Hardware Store', unit_purchase_price: '0.5', created_at: '2023-09-09T07:05:23.644Z', updated_at: '2023-10-09T13:53:33.858Z', subcategory: 'Building',
  }, {
    id: 146, name: 'Trailli vert (1m)', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695899222/images_68_twybzn.jpg', unit_price: '3.0', quantity: 23, category: 'Hardware Store', unit_purchase_price: '2.0', created_at: '2023-09-28T11:07:08.032Z', updated_at: '2023-10-09T13:53:54.317Z', subcategory: 'Building',
  }, {
    id: 140, name: 'Fils à ligaturer (1kg)', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695870006/fil-a-ligaturer-01filacicou13_1_oobzse.jpg', unit_price: '2.0', quantity: 24, category: 'Hardware Store', unit_purchase_price: '1.0', created_at: '2023-09-28T03:03:21.255Z', updated_at: '2023-10-09T13:54:20.004Z', subcategory: 'Building',
  }, {
    id: 43, name: 'Kalet', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694243196/images_45_ga0iss.jpg', unit_price: '1.5', quantity: 12, category: 'Hardware Store', unit_purchase_price: '0.83', created_at: '2023-09-09T07:06:44.457Z', updated_at: '2023-10-09T13:55:04.681Z', subcategory: 'Building',
  }, {
    id: 113, name: 'Cadenas 75mm', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694834858/614N6MbRU7L_asvkxd.jpg', unit_price: '4.5', quantity: 6, category: 'Hardware Store', unit_purchase_price: '2.5', created_at: '2023-09-16T03:27:59.968Z', updated_at: '2023-10-09T14:34:26.019Z', subcategory: 'General',
  }, {
    id: 157, name: 'Cadenas 63mm', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696428005/images_78_ilbidr.jpg', unit_price: '3.0', quantity: 6, category: 'Hardware Store', unit_purchase_price: '2.0', created_at: '2023-10-04T14:10:20.498Z', updated_at: '2023-10-09T14:46:29.552Z', subcategory: 'General',
  }, {
    id: 167, name: "Brosse toile d'araignée ", image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696680615/61dt3GnhFAL._AC_UL600_SR600_600__jrceha.jpg', unit_price: '2.5', quantity: 1, category: 'Hardware Store', unit_purchase_price: '1.8', created_at: '2023-10-07T12:10:36.076Z', updated_at: '2023-10-09T14:47:37.622Z', subcategory: 'Cleaning',
  }, {
    id: 164, name: 'Charnière n°2', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696646363/images_88_dajde7.jpg', unit_price: '0.2', quantity: 48, category: 'Hardware Store', unit_purchase_price: '0.06', created_at: '2023-10-07T02:39:26.815Z', updated_at: '2023-10-12T12:39:15.157Z', subcategory: 'General',
  }, {
    id: 161, name: 'Houe', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696646140/images_87_gqtn5d.jpg', unit_price: '4.0', quantity: 6, category: 'Hardware Store', unit_purchase_price: '2.83', created_at: '2023-10-07T02:35:43.877Z', updated_at: '2023-10-12T12:46:40.074Z', subcategory: 'Tools',
  }, {
    id: 172, name: 'Ciseaux de tôle ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1697250385/0244116_L_ar7zcg.jpg', unit_price: '3.0', quantity: 2, category: 'Hardware Store', unit_purchase_price: '1.8', created_at: '2023-10-14T02:27:19.203Z', updated_at: '2023-10-14T02:27:19.203Z', subcategory: 'Tools',
  }, {
    id: 44, name: 'Pioche', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694245203/PIOCHE-ROUGE_zlsuk6.jpg', unit_price: '6.0', quantity: 6, category: 'Hardware Store', unit_purchase_price: '4.5', created_at: '2023-09-09T07:40:08.839Z', updated_at: '2023-10-09T13:55:21.101Z', subcategory: 'Tools',
  }, {
    id: 52, name: 'Tuyau PVC 90', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694254822/tuyau_90_rvn0o7.jpg', unit_price: '9.0', quantity: 5, category: 'Hardware Store', unit_purchase_price: '7.0', created_at: '2023-09-09T10:20:30.187Z', updated_at: '2023-10-09T13:57:44.787Z', subcategory: 'Plumbing',
  }, {
    id: 53, name: 'Tuyau PVC 63', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694254861/tuyau_63_uijpef.jpg', unit_price: '7.0', quantity: 5, category: 'Hardware Store', unit_purchase_price: '5.0', created_at: '2023-09-09T10:21:07.052Z', updated_at: '2023-10-09T13:57:58.522Z', subcategory: 'Plumbing',
  }, {
    id: 54, name: 'Tuyau PVC 50', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694254930/tuyau_63_ux2abo.jpg', unit_price: '6.0', quantity: 5, category: 'Hardware Store', unit_purchase_price: '4.5', created_at: '2023-09-09T10:22:14.709Z', updated_at: '2023-10-09T13:58:12.436Z', subcategory: 'Plumbing',
  }, {
    id: 55, name: 'Tuyau PPR 3/4', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694255388/ppr_3-4_r9njs3.png', unit_price: '5.0', quantity: 5, category: 'Hardware Store', unit_purchase_price: '3.5', created_at: '2023-09-09T10:29:53.923Z', updated_at: '2023-10-09T13:58:25.056Z', subcategory: 'Plumbing',
  }, {
    id: 57, name: 'Coude PVC 110', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694255467/coude_110_kiw9an.jpg', unit_price: '2.0', quantity: 5, category: 'Hardware Store', unit_purchase_price: '1.2', created_at: '2023-09-09T10:31:14.531Z', updated_at: '2023-10-09T13:59:20.081Z', subcategory: 'Plumbing',
  }, {
    id: 58, name: 'Coude PVC 90', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694255505/coude_90_sc1fsu.jpg', unit_price: '2.0', quantity: 5, category: 'Hardware Store', unit_purchase_price: '1.2', created_at: '2023-09-09T10:31:49.375Z', updated_at: '2023-10-09T13:59:42.782Z', subcategory: 'Plumbing',
  }, {
    id: 73, name: 'Rouleau peinture', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694257300/rlx_gd_dxpgt8.webp', unit_price: '2.0', quantity: 6, category: 'Hardware Store', unit_purchase_price: '1.3', created_at: '2023-09-09T12:09:51.485Z', updated_at: '2023-10-09T14:05:22.306Z', subcategory: 'Paint',
  }, {
    id: 61, name: 'Té PVC 110', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694256098/t_110_nfapip.jpg', unit_price: '2.5', quantity: 5, category: 'Hardware Store', unit_purchase_price: '1.5', created_at: '2023-09-09T10:41:41.963Z', updated_at: '2023-10-09T14:00:39.401Z', subcategory: 'Plumbing',
  }, {
    id: 70, name: 'Coude PVC 50 ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694256951/coude_90_pgkopi.jpg', unit_price: '1.5', quantity: 5, category: 'Hardware Store', unit_purchase_price: '0.5', created_at: '2023-09-09T10:55:55.615Z', updated_at: '2023-10-09T14:00:17.126Z', subcategory: 'Plumbing',
  }, {
    id: 59, name: 'Coude PVC 63', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694255975/coude_63_rnoqxm.webp', unit_price: '1.5', quantity: 5, category: 'Hardware Store', unit_purchase_price: '0.55', created_at: '2023-09-09T10:39:45.079Z', updated_at: '2023-10-09T14:00:05.938Z', subcategory: 'Plumbing',
  }, {
    id: 67, name: 'Té PPR 3/4', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694256702/TE-PPR_yrabyf.jpg', unit_price: '0.8', quantity: 20, category: 'Hardware Store', unit_purchase_price: '0.4', created_at: '2023-09-09T10:51:47.034Z', updated_at: '2023-10-09T14:02:15.106Z', subcategory: 'Plumbing',
  }, {
    id: 88, name: 'Boîte de connexion 100 X 100', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694614041/boite_de_connexion_x5ruz5.jpg', unit_price: '1.5', quantity: 12, category: 'Hardware Store', unit_purchase_price: '0.66', created_at: '2023-09-13T14:07:26.455Z', updated_at: '2023-10-09T14:07:29.650Z', subcategory: 'Electrical',
  }, {
    id: 89, name: 'Socket en porcelaine ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694614115/socket_ayfrg6.jpg', unit_price: '0.4', quantity: 12, category: 'Hardware Store', unit_purchase_price: '0.2', created_at: '2023-09-13T14:08:40.646Z', updated_at: '2023-10-09T14:07:47.322Z', subcategory: 'Electrical',
  }, {
    id: 75, name: 'Scotch peintre', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694262075/scotch_peintre_buzd4m.jpg', unit_price: '1.0', quantity: 9, category: 'Hardware Store', unit_purchase_price: '0.55', created_at: '2023-09-09T12:21:23.142Z', updated_at: '2023-10-09T14:06:29.903Z', subcategory: 'Paint',
  }, {
    id: 158, name: 'Ficelle /90', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696620684/images_83_stmfju.jpg', unit_price: '2.5', quantity: 5, category: 'Hardware Store', unit_purchase_price: '1.8', created_at: '2023-10-06T19:32:31.682Z', updated_at: '2023-10-09T13:51:04.784Z', subcategory: 'Building',
  }, {
    id: 42, name: 'Poignet ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694243159/images_44_ztmjdt.jpg', unit_price: '3.0', quantity: 6, category: 'Hardware Store', unit_purchase_price: '0.83', created_at: '2023-09-09T07:06:04.162Z', updated_at: '2023-10-09T13:54:39.769Z', subcategory: 'Building',
  }, {
    id: 49, name: 'Lame de scie ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694245498/t%C3%A9l%C3%A9chargement_ygcdcg.png', unit_price: '1.5', quantity: 20, category: 'Hardware Store', unit_purchase_price: '1.0', created_at: '2023-09-09T07:45:25.358Z', updated_at: '2023-10-09T13:55:58.777Z', subcategory: 'Tools',
  }, {
    id: 48, name: 'Mètre (3m)', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694245371/t%C3%A9l%C3%A9chargement_2_yiep2n.webp', unit_price: '1.5', quantity: 12, category: 'Hardware Store', unit_purchase_price: '0.66', created_at: '2023-09-09T07:42:54.453Z', updated_at: '2023-10-09T13:56:48.431Z', subcategory: 'Tools',
  }, {
    id: 51, name: 'Tuyau PVC 110', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694254037/tuyau_110_qmtaxm.jpg', unit_price: '12.5', quantity: 5, category: 'Hardware Store', unit_purchase_price: '10.0', created_at: '2023-09-09T10:08:33.494Z', updated_at: '2023-10-09T13:57:29.086Z', subcategory: 'Plumbing',
  }, {
    id: 56, name: 'Tuyau PPR 1/2', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694255430/PPR_1_-_2_ai0es4.jpg', unit_price: '4.0', quantity: 5, category: 'Hardware Store', unit_purchase_price: '2.5', created_at: '2023-09-09T10:30:34.484Z', updated_at: '2023-10-09T13:58:46.818Z', subcategory: 'Plumbing',
  }, {
    id: 62, name: 'Té PVC 90', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694256142/t_110_nngpw6.jpg', unit_price: '2.5', quantity: 5, category: 'Hardware Store', unit_purchase_price: '1.5', created_at: '2023-09-09T10:42:26.291Z', updated_at: '2023-10-09T14:00:52.965Z', subcategory: 'Plumbing',
  }, {
    id: 68, name: 'Té PVC 63', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694256837/t_110_vhi35i.jpg', unit_price: '1.5', quantity: 5, category: 'Hardware Store', unit_purchase_price: '0.8', created_at: '2023-09-09T10:54:02.516Z', updated_at: '2023-10-09T14:01:06.339Z', subcategory: 'Plumbing',
  }, {
    id: 69, name: 'Té PVC 50', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694256871/t_110_owwuad.jpg', unit_price: '1.5', quantity: 5, category: 'Hardware Store', unit_purchase_price: '0.5', created_at: '2023-09-09T10:54:36.205Z', updated_at: '2023-10-09T14:01:16.529Z', subcategory: 'Plumbing',
  }, {
    id: 65, name: 'Col tangite 125g', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694256629/col_pvc_ytsazb.jpg', unit_price: '3.0', quantity: 5, category: 'Hardware Store', unit_purchase_price: '2.5', created_at: '2023-09-09T10:50:34.887Z', updated_at: '2023-10-09T14:01:32.022Z', subcategory: 'Plumbing',
  }, {
    id: 66, name: 'Coude PPR 3/4', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694256662/coude_ppr_uqqdkm.jpg', unit_price: '0.8', quantity: 20, category: 'Hardware Store', unit_purchase_price: '0.4', created_at: '2023-09-09T10:51:06.346Z', updated_at: '2023-10-09T14:01:53.034Z', subcategory: 'Plumbing',
  }, {
    id: 71, name: 'Pinceau 3"', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694257149/Pinceau-3-pouces_vp2ovj.webp', unit_price: '1.0', quantity: 6, category: 'Hardware Store', unit_purchase_price: '0.58', created_at: '2023-09-09T10:59:15.281Z', updated_at: '2023-10-09T14:02:51.752Z', subcategory: 'Paint',
  }, {
    id: 74, name: 'Peinture Basco 1/2 L', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694262015/basco_lxboqc.png', unit_price: '2.0', quantity: 24, category: 'Hardware Store', unit_purchase_price: '1.45', created_at: '2023-09-09T12:20:28.575Z', updated_at: '2023-10-09T14:06:05.976Z', subcategory: 'Paint',
  }, {
    id: 87, name: 'Boîte de connexion 80 X 80', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694613997/boite_de_connexion_w9eqz6.jpg', unit_price: '1.0', quantity: 12, category: 'Hardware Store', unit_purchase_price: '0.4', created_at: '2023-09-13T14:06:43.139Z', updated_at: '2023-10-09T14:07:18.771Z', subcategory: 'Electrical',
  }, {
    id: 147, name: 'Cylindre armoire ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695900881/camel_drawer_locks_gyld1j.png', unit_price: '1.5', quantity: 12, category: 'Hardware Store', unit_purchase_price: '0.63', created_at: '2023-09-28T11:35:02.559Z', updated_at: '2023-10-09T14:37:20.587Z', subcategory: 'General',
  }, {
    id: 45, name: 'Beche ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694245246/pelle-beche-ideal-taille-1-noir-manche-en-frene_jvbexg.jpg', unit_price: '3.0', quantity: 6, category: 'Hardware Store', unit_purchase_price: '2.0', created_at: '2023-09-09T07:40:49.786Z', updated_at: '2023-10-12T11:50:27.945Z', subcategory: 'Tools',
  }, {
    id: 162, name: 'Charnière n°3', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696646253/images_89_ggwlxn.jpg', unit_price: '0.6', quantity: 24, category: 'Hardware Store', unit_purchase_price: '0.13', created_at: '2023-10-07T02:37:58.076Z', updated_at: '2023-10-12T12:40:29.125Z', subcategory: 'General',
  }, {
    id: 80, name: 'Mineral Water Sion', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694488121/profil_svjrhj.jpg', unit_price: '1.2', quantity: 1, category: 'Mineral Water', unit_purchase_price: '1.0', created_at: '2023-09-12T03:09:03.712Z', updated_at: '2023-10-12T12:52:09.137Z', subcategory: 'Mineral Water',
  }, {
    id: 141, name: 'Vernis clair ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695872079/images_64_w6kiqb.jpg', unit_price: '2.5', quantity: 1, category: 'Hardware Store', unit_purchase_price: '2.0', created_at: '2023-09-28T03:35:04.683Z', updated_at: '2023-10-12T12:42:17.978Z', subcategory: 'Paint',
  }, {
    id: 130, name: 'Clous de 5, 6, 8, 10 ou 12cm (1Kg)', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695785038/clous_lixk5z.jpg', unit_price: '2.0', quantity: 25, category: 'Hardware Store', unit_purchase_price: '1.4', created_at: '2023-09-27T03:24:46.278Z', updated_at: '2023-10-09T13:45:53.559Z', subcategory: 'Building',
  }, {
    id: 129, name: 'Clous de 3 ou 5cm (1Kg)', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695785002/pt_clous_newhpj.jpg', unit_price: '2.5', quantity: 24, category: 'Hardware Store', unit_purchase_price: '2.0', created_at: '2023-09-27T03:23:33.475Z', updated_at: '2023-10-09T13:45:37.315Z', subcategory: 'Building',
  }, {
    id: 134, name: 'Pinceau 2.5"', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695801122/pinceau_2.5_kj2jic.png', unit_price: '0.8', quantity: 10, category: 'Hardware Store', unit_purchase_price: '0.5', created_at: '2023-09-27T07:52:08.383Z', updated_at: '2023-10-09T14:04:44.777Z', subcategory: 'Paint',
  }, {
    id: 92, name: 'Boîte attaches 18 mm', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694615377/attahce_gd_qnoris.jpg', unit_price: '2.5', quantity: 1, category: 'Hardware Store', unit_purchase_price: '2.0', created_at: '2023-09-13T14:29:42.818Z', updated_at: '2023-10-12T12:10:51.390Z', subcategory: 'Electrical',
  }, {
    id: 127, name: 'Fiche mal Yaki', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695028441/fiche_ztbdwb.jpg', unit_price: '1.0', quantity: 10, category: 'Hardware Store', unit_purchase_price: '0.5', created_at: '2023-09-18T09:25:06.763Z', updated_at: '2023-10-09T14:26:29.779Z', subcategory: 'Electrical',
  }, {
    id: 91, name: 'Interrupteur Yaki', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694615314/interr_pz8hll.jpg', unit_price: '1.5', quantity: 10, category: 'Hardware Store', unit_purchase_price: '1.2', created_at: '2023-09-13T14:28:38.327Z', updated_at: '2023-10-09T14:08:18.406Z', subcategory: 'Electrical',
  }, {
    id: 110, name: 'Flexible', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695873915/images_66_subyqi.jpg', unit_price: '11.0', quantity: 1, category: 'Hardware Store', unit_purchase_price: '9.0', created_at: '2023-09-13T14:55:55.092Z', updated_at: '2023-10-12T12:22:43.578Z', subcategory: 'Electrical',
  }, {
    id: 125, name: 'Interrupteur Songrui', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695023204/images_5_jbokcp.jpg', unit_price: '0.8', quantity: 10, category: 'Hardware Store', unit_purchase_price: '0.45', created_at: '2023-09-18T07:46:48.837Z', updated_at: '2023-10-09T14:22:00.233Z', subcategory: 'Electrical',
  }, {
    id: 96, name: 'Toile isolante', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694615742/toile_ppi1th.jpg', unit_price: '0.4', quantity: 18, category: 'Hardware Store', unit_purchase_price: '0.16', created_at: '2023-09-13T14:35:47.185Z', updated_at: '2023-10-09T14:20:17.430Z', subcategory: 'Electrical',
  }, {
    id: 108, name: 'Boîte attaches 8 mm', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694616737/attache_bwlgvb.jpg', unit_price: '1.0', quantity: 4, category: 'Hardware Store', unit_purchase_price: '0.5', created_at: '2023-09-13T14:52:21.893Z', updated_at: '2023-10-09T14:30:29.555Z', subcategory: 'Electrical',
  }, {
    id: 95, name: 'TD 8 départs', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694615526/coffret_qzdb0l.jpg', unit_price: '8.0', quantity: 1, category: 'Hardware Store', unit_purchase_price: '5.0', created_at: '2023-09-13T14:32:13.863Z', updated_at: '2023-10-09T14:10:09.125Z', subcategory: 'Electrical',
  }, {
    id: 109, name: "Boîte d'encastrement", image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694616858/images_3_hwmzvg.jpg', unit_price: '0.6', quantity: 20, category: 'Hardware Store', unit_purchase_price: '0.3', created_at: '2023-09-13T14:54:23.683Z', updated_at: '2023-10-09T14:30:54.132Z', subcategory: 'Electrical',
  }, {
    id: 123, name: 'Jeux 7 Tournevis', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695022670/jeux_tournevis_lmfeih.webp', unit_price: '7.0', quantity: 2, category: 'Hardware Store', unit_purchase_price: '5.5', created_at: '2023-09-18T07:38:14.868Z', updated_at: '2023-10-09T14:31:53.932Z', subcategory: 'Electrical',
  }, {
    id: 152, name: 'Cadenas 32mm', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696646609/IMG_20231003_155800_461_phgsrf.jpg', unit_price: '1.0', quantity: 4, category: 'Hardware Store', unit_purchase_price: '0.5', created_at: '2023-10-03T14:39:23.447Z', updated_at: '2023-10-09T14:45:55.855Z', subcategory: 'General',
  }, {
    id: 78, name: 'Powerbank Veger', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694487483/verger_fytsty.jpg', unit_price: '20.0', quantity: 2, category: 'Electronics', unit_purchase_price: '12.5', created_at: '2023-09-12T02:58:31.671Z', updated_at: '2024-02-03T02:35:22.105Z', subcategory: 'Telephony',
  }, {
    id: 102, name: 'Cable Yulan 2 X 2.5', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694616124/rouleau_imo1h5.jpg', unit_price: '37.0', quantity: 1, category: 'Hardware Store', unit_purchase_price: '35.0', created_at: '2023-09-13T14:42:09.522Z', updated_at: '2024-03-02T06:32:04.683Z', subcategory: 'Electrical',
  }, {
    id: 128, name: 'Fer à béton bar de 10', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695612908/images_41_vt22wb.jpg', unit_price: '5.0', quantity: 30, category: 'Hardware Store', unit_purchase_price: '4.57', created_at: '2023-09-25T03:35:30.134Z', updated_at: '2023-10-12T11:44:11.299Z', subcategory: 'Building',
  }, {
    id: 133, name: 'Pinceau 2"', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695800892/pinceau_2_wszp9z.jpg', unit_price: '0.6', quantity: 6, category: 'Hardware Store', unit_purchase_price: '0.5', created_at: '2023-09-27T07:48:36.505Z', updated_at: '2023-10-09T14:05:06.308Z', subcategory: 'Paint',
  }, {
    id: 132, name: 'Traillis (1m)', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695785261/traillis_mcohqc.jpg', unit_price: '2.0', quantity: 40, category: 'Hardware Store', unit_purchase_price: '1.5', created_at: '2023-09-27T03:27:51.108Z', updated_at: '2023-10-12T11:46:59.842Z', subcategory: 'Building',
  }, {
    id: 93, name: 'Boîte attaches 22mm', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694615422/attahce_gd_gfbngh.jpg', unit_price: '3.5', quantity: 1, category: 'Hardware Store', unit_purchase_price: '3.0', created_at: '2023-09-13T14:30:29.254Z', updated_at: '2023-10-12T12:10:35.137Z', subcategory: 'Electrical',
  }, {
    id: 131, name: 'Papier émeri P60, 80, 120 (1m)', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695785149/emeri_tqgmfi.jpg', unit_price: '1.0', quantity: 25, category: 'Hardware Store', unit_purchase_price: '0.8', created_at: '2023-09-27T03:25:55.145Z', updated_at: '2023-10-09T13:56:26.153Z', subcategory: 'Tools',
  }, {
    id: 135, name: 'Roulette mf', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695802852/rlx_moyen_kikmsr.jpg', unit_price: '1.2', quantity: 6, category: 'Hardware Store', unit_purchase_price: '0.66', created_at: '2023-09-27T08:20:59.084Z', updated_at: '2023-10-09T14:05:40.536Z', subcategory: 'Paint',
  }, {
    id: 90, name: 'Prise Macvi', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694615182/prise_z1n34v.jpg', unit_price: '1.5', quantity: 10, category: 'Hardware Store', unit_purchase_price: '1.2', created_at: '2023-09-13T14:27:44.108Z', updated_at: '2023-10-09T14:08:08.112Z', subcategory: 'Electrical',
  }, {
    id: 94, name: 'TD 6 départs', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694615489/coffret_cs65ze.jpg', unit_price: '6.0', quantity: 1, category: 'Hardware Store', unit_purchase_price: '4.5', created_at: '2023-09-13T14:31:35.202Z', updated_at: '2023-10-09T14:10:34.930Z', subcategory: 'Electrical',
  }, {
    id: 106, name: 'Lampe 12V (Panneau)', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694616638/panneau_yxlm3p.jpg', unit_price: '1.0', quantity: 12, category: 'Hardware Store', unit_purchase_price: '0.7', created_at: '2023-09-13T14:50:42.282Z', updated_at: '2023-10-09T14:11:30.321Z', subcategory: 'Electrical',
  }, {
    id: 97, name: 'Cheville 12', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694615813/cheville_zzzeht.jpg', unit_price: '2.0', quantity: 1, category: 'Hardware Store', unit_purchase_price: '1.5', created_at: '2023-09-13T14:36:58.703Z', updated_at: '2023-10-09T14:21:03.754Z', subcategory: 'Electrical',
  }, {
    id: 98, name: 'Chevilles 6 \\u0026 8', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694615862/cheville_nhkfsp.jpg', unit_price: '1.5', quantity: 1, category: 'Hardware Store', unit_purchase_price: '1.0', created_at: '2023-09-13T14:37:51.319Z', updated_at: '2023-10-09T14:21:20.485Z', subcategory: 'Electrical',
  }, {
    id: 126, name: 'Prise Songrui', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695027949/prise_songrui_ncyxtb.jpg', unit_price: '0.8', quantity: 10, category: 'Hardware Store', unit_purchase_price: '0.45', created_at: '2023-09-18T09:06:11.366Z', updated_at: '2023-10-09T14:21:51.530Z', subcategory: 'Electrical',
  }, {
    id: 104, name: 'Cable 1 x 2.5', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694616492/file_yulan_y9xwig.jpg', unit_price: '38.0', quantity: 1, category: 'Hardware Store', unit_purchase_price: '34.0', created_at: '2023-09-13T14:48:48.821Z', updated_at: '2023-10-09T14:27:25.830Z', subcategory: 'Electrical',
  }, {
    id: 105, name: 'Vis à bois', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694616585/vis_%C3%A0_bois_crwxil.jpg', unit_price: '0.04', quantity: 725, category: 'Hardware Store', unit_purchase_price: '0.01', created_at: '2023-09-13T14:49:49.444Z', updated_at: '2023-10-09T14:29:28.027Z', subcategory: 'Electrical',
  }, {
    id: 107, name: 'Lampe rotative multicolore ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695823522/ampoule_40w_sgpggd.jpg', unit_price: '4.0', quantity: 1, category: 'Hardware Store', unit_purchase_price: '3.5', created_at: '2023-09-13T14:51:35.413Z', updated_at: '2023-10-09T14:29:54.345Z', subcategory: 'Electrical',
  }, {
    id: 112, name: 'Cylindre Kale', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694834807/cylindre_kale_grzf7n.jpg', unit_price: '4.0', quantity: 4, category: 'Hardware Store', unit_purchase_price: '2.5', created_at: '2023-09-16T03:26:55.837Z', updated_at: '2023-10-12T12:31:02.101Z', subcategory: 'General',
  }, {
    id: 142, name: 'Boîte de connexion 130 X 130', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695872343/images_65_j4n2fd.jpg', unit_price: '2.0', quantity: 6, category: 'Hardware Store', unit_purchase_price: '1.0', created_at: '2023-09-28T03:39:27.973Z', updated_at: '2023-10-09T14:32:30.169Z', subcategory: 'Electrical',
  }, {
    id: 121, name: 'Super Glue Alteco', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695022381/super_glue_xhuigl.webp', unit_price: '0.32', quantity: 12, category: 'Hardware Store', unit_purchase_price: '0.22', created_at: '2023-09-18T07:33:07.678Z', updated_at: '2023-10-09T14:33:41.546Z', subcategory: 'General',
  }, {
    id: 122, name: 'Cadenas Solix', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695022474/cadenas_uosdmm.jpg', unit_price: '4.0', quantity: 6, category: 'Hardware Store', unit_purchase_price: '2.5', created_at: '2023-09-18T07:34:55.752Z', updated_at: '2023-10-09T14:34:03.630Z', subcategory: 'General',
  }, {
    id: 115, name: 'Raclette', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694835015/raclette_mi2jbe.jpg', unit_price: '2.0', quantity: 2, category: 'Hardware Store', unit_purchase_price: '1.5', created_at: '2023-09-16T03:30:21.053Z', updated_at: '2023-10-09T14:35:49.206Z', subcategory: 'Cleaning',
  }, {
    id: 159, name: 'Ficelle /18', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696620837/images_84_xcwpl9.jpg', unit_price: '1.5', quantity: 5, category: 'Hardware Store', unit_purchase_price: '0.6', created_at: '2023-10-07T02:24:15.775Z', updated_at: '2023-10-09T13:49:47.614Z', subcategory: 'Building',
  }, {
    id: 137, name: 'Mètre (5m)', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695803551/5m%C3%A8tres_mkl1jr.jpg', unit_price: '3.0', quantity: 12, category: 'Hardware Store', unit_purchase_price: '1.25', created_at: '2023-09-27T08:32:45.141Z', updated_at: '2023-10-09T13:56:59.574Z', subcategory: 'Tools',
  }, {
    id: 136, name: 'Roulette pf', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695802883/rlx_pt_format_h1v2by.jpg', unit_price: '1.0', quantity: 6, category: 'Hardware Store', unit_purchase_price: '0.55', created_at: '2023-09-27T08:21:28.076Z', updated_at: '2023-10-09T14:05:53.682Z', subcategory: 'Paint',
  }, {
    id: 143, name: 'TD 12 départs', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695872887/coffret_qzdb0l_zbsxcq.jpg', unit_price: '12.0', quantity: 1, category: 'Hardware Store', unit_purchase_price: '8.0', created_at: '2023-09-28T03:49:26.975Z', updated_at: '2023-10-09T14:09:51.733Z', subcategory: 'Electrical',
  }, {
    id: 170, name: 'Lampe 5W ou 9W', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696861010/images_98_nqxmtr.jpg', unit_price: '1.0', quantity: 20, category: 'Hardware Store', unit_purchase_price: '0.7', created_at: '2023-10-09T14:16:59.628Z', updated_at: '2023-10-09T14:16:59.628Z', subcategory: 'Electrical',
  }, {
    id: 138, name: 'Rallonge', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695828099/rallonge_w5uja8.jpg', unit_price: '5.0', quantity: 2, category: 'Hardware Store', unit_purchase_price: '3.5', created_at: '2023-09-27T15:21:48.204Z', updated_at: '2023-10-09T14:32:14.522Z', subcategory: 'Electrical',
  }, {
    id: 155, name: 'Savon multi-usage (5L)', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696346640/PhotoGrid_Site_1696346588231_jaipfo.jpg', unit_price: '3.2', quantity: 10, category: 'Hardware Store', unit_purchase_price: '1.6', created_at: '2023-10-03T15:25:44.426Z', updated_at: '2023-10-09T14:36:37.118Z', subcategory: 'Cleaning',
  }, {
    id: 153, name: 'Cadenas 38mm', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696646636/IMG_20231003_155800_461_wuvev6.jpg', unit_price: '1.2', quantity: 4, category: 'Hardware Store', unit_purchase_price: '0.58', created_at: '2023-10-03T14:40:24.645Z', updated_at: '2023-10-09T14:46:05.538Z', subcategory: 'General',
  }, {
    id: 168, name: 'Raclette en bois ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696680881/images_90_dxshqp.jpg', unit_price: '2.0', quantity: 2, category: 'Hardware Store', unit_purchase_price: '1.25', created_at: '2023-10-07T12:15:05.760Z', updated_at: '2023-10-09T14:48:05.406Z', subcategory: 'Cleaning',
  }, {
    id: 163, name: 'Charnière n°2.5', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1696646327/51tyiFv86XL._AC_UF1000_1000_QL80__nyvfuc.jpg', unit_price: '0.4', quantity: 48, category: 'Hardware Store', unit_purchase_price: '0.08', created_at: '2023-10-07T02:38:50.931Z', updated_at: '2023-10-12T12:39:55.600Z', subcategory: 'General',
  }, {
    id: 173, name: 'Teflon 1/2"', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1698315470/images_-_2023-10-26T121739.908_xpcwwc.jpg', unit_price: '0.4', quantity: 30, category: 'Hardware Store', unit_purchase_price: '0.16', created_at: '2023-10-26T10:17:57.766Z', updated_at: '2023-10-26T10:18:24.861Z', subcategory: 'Plumbing',
  }, {
    id: 174, name: 'Charnière 4"', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1698315615/images_-_2023-10-26T121954.095_eaahx0.jpg', unit_price: '1.0', quantity: 12, category: 'Hardware Store', unit_purchase_price: '0.33', created_at: '2023-10-26T10:21:01.699Z', updated_at: '2023-10-26T10:21:01.699Z', subcategory: 'Building',
  }, {
    id: 1, name: 'Marteau', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1702349774/marteau_zuuqwc.jpg', unit_price: '4.0', quantity: 2, category: 'Hardware Store', unit_purchase_price: '2.0', created_at: '2023-12-12T02:56:22.267Z', updated_at: '2023-12-12T02:56:22.267Z', subcategory: 'Tools',
  }, {
    id: 2, name: 'Sifon de sol', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1702349869/siphon-de-sol-polypropylene-gris_uszrcq.jpg', unit_price: '3.0', quantity: 1, category: 'Hardware Store', unit_purchase_price: '2.5', created_at: '2023-12-12T02:57:53.783Z', updated_at: '2023-12-12T02:57:53.783Z', subcategory: 'Plumbing',
  }, {
    id: 3, name: "Niveau d'eau", image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1702426866/niveau-d-eau-magnetique-45cm_jk1vur.png', unit_price: '3.0', quantity: 1, category: 'Hardware Store', unit_purchase_price: '2.5', created_at: '2023-12-13T00:21:43.105Z', updated_at: '2023-12-13T00:21:43.105Z', subcategory: 'Tools',
  }, {
    id: 4, name: 'Robinet évier', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1702427092/robinet-mitigeur-eviervasque-sureleve-chrome-basic_isyaoa.jpg', unit_price: '10.0', quantity: 1, category: 'Hardware Store', unit_purchase_price: '8.5', created_at: '2023-12-13T00:25:32.466Z', updated_at: '2023-12-13T00:25:32.466Z', subcategory: 'Plumbing',
  }, {
    id: 148, name: 'BavChlore (5L)', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1695917341/Bav_j0ol4q.jpg', unit_price: '1.85', quantity: 2, category: 'Hardware Store', unit_purchase_price: '1.5', created_at: '2023-09-28T16:09:47.818Z', updated_at: '2024-01-26T13:53:22.705Z', subcategory: 'Cleaning',
  }, {
    id: 5, name: 'Robinet 1/2"', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1702427344/download_qkcwgs.jpg', unit_price: '5.0', quantity: 1, category: 'Hardware Store', unit_purchase_price: '4.5', created_at: '2023-12-13T00:30:53.103Z', updated_at: '2023-12-13T00:30:53.103Z', subcategory: 'Plumbing',
  }, {
    id: 21, name: 'Gloss Thinner', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1706046495/basco-thinner-300x300_exld3z.jpg', unit_price: '4.5', quantity: 6, category: 'Hardware Store', unit_purchase_price: '3.58', created_at: '2024-01-23T21:50:19.869Z', updated_at: '2024-01-23T21:50:19.869Z', subcategory: 'Paint',
  }, {
    id: 23, name: 'Serrure Renz', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1706276639/BN-RENZ-ezgif.com-webp-to-jpg-converter_-_Copy_kbeoh4.jpg', unit_price: '12.0', quantity: 3, category: 'Hardware Store', unit_purchase_price: '7.5', created_at: '2024-01-26T13:44:27.857Z', updated_at: '2024-01-26T13:44:27.857Z', subcategory: 'General',
  }, {
    id: 26, name: 'Col tangite 500mg', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1706277442/file_6857_712_6861_wt028z.jpg', unit_price: '5.0', quantity: 1, category: 'Hardware Store', unit_purchase_price: '4.0', created_at: '2024-01-26T13:58:00.226Z', updated_at: '2024-01-26T13:58:00.226Z', subcategory: 'Plumbing',
  }, {
    id: 117, name: 'Brosse toilette', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1706277899/477614_1_477614_WH_B_v1_6aba_vphham.webp', unit_price: '2.5', quantity: 1, category: 'Hardware Store', unit_purchase_price: '1.25', created_at: '2023-09-18T07:19:47.074Z', updated_at: '2024-01-26T14:07:28.205Z', subcategory: 'Cleaning',
  }, {
    id: 22, name: 'Jus Naturel Sion | 5 L', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1706047491/159-1593158_juice-wallpaper_t34hfr.jpg', unit_price: '5.0', quantity: 48, category: 'Beverage Store', unit_purchase_price: '3.94', created_at: '2024-01-23T22:00:53.409Z', updated_at: '2024-01-26T14:10:11.815Z', subcategory: 'Beverage Store',
  }, {
    id: 47, name: 'Rechaud à Gaz Kit Complet', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1706732128/Complete-Gas-cooking-set--1024x1024_cd8aqf.webp', unit_price: '135.0', quantity: 1, category: 'Gas Energy', unit_purchase_price: '67.5', created_at: '2024-01-31T20:16:31.797Z', updated_at: '2024-01-31T20:16:31.797Z', subcategory: 'Gas Energy',
  }, {
    id: 7, name: 'Gaz 12Kg - Recharge', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1705605881/Total-Gas-12kg-Cylinder-Gas_ghcq4m.webp', unit_price: '20.0', quantity: 2, category: 'Gas Energy', unit_purchase_price: '19.0', created_at: '2024-01-18T19:25:10.202Z', updated_at: '2024-01-31T20:20:52.229Z', subcategory: 'Gas Energy',
  }, {
    id: 6, name: 'Gaz 6Kg - Recharge', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1705605784/n202205251515420188906_o34nvo.webp', unit_price: '10.0', quantity: 2, category: 'Gas Energy', unit_purchase_price: '9.5', created_at: '2024-01-18T19:24:28.098Z', updated_at: '2024-01-31T20:21:33.965Z', subcategory: 'Gas Energy',
  }, {
    id: 50, name: 'Casque', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1706775817/images_12_pnyxqi.jpg', unit_price: '3.0', quantity: 3, category: 'Hardware Store', unit_purchase_price: '2.5', created_at: '2024-02-01T08:24:03.995Z', updated_at: '2024-02-01T08:24:03.995Z', subcategory: 'Electrical',
  }, {
    id: 60, name: 'Testeur', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1708397446/tournevis-testeur-presence-tension-230v-longueur-14cm_zw2h73.png', unit_price: '1.0', quantity: 10, category: 'Hardware Store', unit_purchase_price: '0.45', created_at: '2024-02-20T02:51:10.359Z', updated_at: '2024-02-20T02:51:10.359Z', subcategory: 'Electrical',
  }, {
    id: 64, name: 'Niveau petit format', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1709316646/niveau_jy67bb.jpg', unit_price: '3.0', quantity: 1, category: 'Hardware Store', unit_purchase_price: '2.0', created_at: '2024-03-01T18:11:18.418Z', updated_at: '2024-03-01T18:11:18.418Z', subcategory: 'Tools',
  }, {
    id: 77, name: 'Couvre lit', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1709499837/antilo-couvre-lit-matelasse-dual-esmeralda-31108_zy11uv.jpg', unit_price: '25.0', quantity: 19, category: 'Home Deco', unit_purchase_price: '15.0', created_at: '2024-03-03T21:04:02.878Z', updated_at: '2024-03-03T21:04:02.878Z', subcategory: 'Home Deco',
  }, {
    id: 79, name: 'Lapin', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1709500085/lapin_qwyjq5.jpg', unit_price: '10.0', quantity: 19, category: 'Agri Food', unit_purchase_price: '3.0', created_at: '2024-03-03T21:08:22.031Z', updated_at: '2024-03-03T21:08:22.031Z', subcategory: 'Agri Food',
  }, {
    id: 82, name: 'Parcelle à vendre', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1709502928/terrain_2_rlqgt3.jpg', unit_price: '13000.0', quantity: 1, category: 'Real Estate', unit_purchase_price: '13000.0', created_at: '2024-03-03T21:55:48.008Z', updated_at: '2024-03-03T21:55:48.008Z', subcategory: 'Real Estate',
  }, {
    id: 176, name: 'Baguette de soudure', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1709727829/baquette-a-soudure_ip15xz.jpg', unit_price: '5.0', quantity: 8, category: 'Hardware Store', unit_purchase_price: '3.5', created_at: '2024-03-06T12:24:22.934Z', updated_at: '2024-03-06T12:24:22.934Z', subcategory: 'Welding',
  }, {
    id: 177, name: 'Disque à couper', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1709728031/disque_ufmd2s.png', unit_price: '2.5', quantity: 25, category: 'Hardware Store', unit_purchase_price: '1.8', created_at: '2024-03-06T12:28:17.806Z', updated_at: '2024-03-06T12:28:17.806Z', subcategory: 'Welding',
  }, {
    id: 178, name: 'Antirouille 4L', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1709728523/P115_kq6dvl.png', unit_price: '10.0', quantity: 4, category: 'Hardware Store', unit_purchase_price: '8.0', created_at: '2024-03-06T12:36:35.154Z', updated_at: '2024-03-06T12:36:35.154Z', subcategory: 'Welding',
  }, {
    id: 179, name: 'Bâche 4 X 5m', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1710405449/b%C3%A2che_cjtmy6.jpg', unit_price: '7.0', quantity: 2, category: 'Hardware Store', unit_purchase_price: '5.5', created_at: '2024-03-14T08:44:08.465Z', updated_at: '2024-03-14T08:44:08.465Z', subcategory: 'Building',
  }, {
    id: 180, name: 'Multiprise', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1711609462/UK-Plastic-Bakelite-Adaptor-Multi-Function-Plug_jxwftm.webp', unit_price: '1.5', quantity: 24, category: 'Hardware Store', unit_purchase_price: '0.88', created_at: '2024-03-28T07:05:04.521Z', updated_at: '2024-03-28T07:05:04.521Z', subcategory: 'Electrical',
  }, {
    id: 181, name: 'Tenaille', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1711609618/images_teh6z4.jpg', unit_price: '4.0', quantity: 2, category: 'Hardware Store', unit_purchase_price: '2.0', created_at: '2024-03-28T07:07:11.503Z', updated_at: '2024-03-28T07:07:11.503Z', subcategory: 'Tools',
  }, {
    id: 182, name: 'Pinceau 1.5"', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1711609693/images_1_ztp7o6.jpg', unit_price: '0.35', quantity: 12, category: 'Hardware Store', unit_purchase_price: '0.25', created_at: '2024-03-28T07:09:12.164Z', updated_at: '2024-03-28T07:09:12.164Z', subcategory: 'Paint',
  }, {
    id: 183, name: 'Niveau petit format', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1711609845/images_2_jfvjok.jpg', unit_price: '3.0', quantity: 3, category: 'Hardware Store', unit_purchase_price: '1.5', created_at: '2024-03-28T07:11:24.741Z', updated_at: '2024-03-28T07:11:24.741Z', subcategory: 'Tools',
  }, {
    id: 184, name: 'Toile isolante premium', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1711609958/66561545_1_vbpc4h.jpg', unit_price: '1.0', quantity: 10, category: 'Hardware Store', unit_purchase_price: '0.3', created_at: '2024-03-28T07:13:29.365Z', updated_at: '2024-03-28T07:13:29.365Z', subcategory: 'Electrical',
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
