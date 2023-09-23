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
  products: [
    {
      id: 28, name: 'Ciment Katana', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694242398/IMG_20230905_135152_676_qq2gy4.jpg', unit_price: '11.5', quantity: 22, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T06:53:33.342Z', updated_at: '2023-09-09T06:53:33.342Z', subcategory: 'Building',
    }, {
      id: 29, name: 'Ciment Hima', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694242437/t%C3%A9l%C3%A9chargement_4_sf4gcy.jpg', unit_price: '12.0', quantity: 12, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T06:54:01.164Z', updated_at: '2023-09-09T06:54:01.164Z', subcategory: 'Building',
    }, {
      id: 30, name: '1Kg clous 3 or 4 or 5mm', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694242574/images_36_phecgx.jpg', unit_price: '2.5', quantity: 50, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T06:56:18.574Z', updated_at: '2023-09-09T06:56:18.574Z', subcategory: 'Building',
    }, {
      id: 31, name: '1Kg clous 6 or 10 or 12mm', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694242636/images_35_yh8dbx.jpg', unit_price: '2.0', quantity: 50, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T06:57:20.422Z', updated_at: '2023-09-09T06:57:20.422Z', subcategory: 'Building',
    }, {
      id: 32, name: 'Tôle Dumuzas', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694242679/images_37_pskosf.jpg', unit_price: '8.0', quantity: 40, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T06:58:03.023Z', updated_at: '2023-09-09T06:58:03.023Z', subcategory: 'Building',
    }, {
      id: 33, name: 'Triplex ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694242712/images_38_ovxu3j.jpg', unit_price: '4.0', quantity: 50, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T06:58:36.220Z', updated_at: '2023-09-09T06:58:36.220Z', subcategory: 'Building',
    }, {
      id: 34, name: 'Bâche bleu', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694242751/71phb8j7NaL._AC_UF1000_1000_QL80__vzfyiz.jpg', unit_price: '5.0', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T06:59:15.859Z', updated_at: '2023-09-09T06:59:15.859Z', subcategory: 'Building',
    }, {
      id: 35, name: 'Ficelle maçon ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694242803/images_39_algb2e.jpg', unit_price: '2.5', quantity: 10, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T07:00:10.090Z', updated_at: '2023-09-09T07:00:10.090Z', subcategory: 'Building',
    }, {
      id: 36, name: 'Fer à béton bar de 12', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694242850/images_40_karc3v.jpg', unit_price: '7.0', quantity: 30, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T07:01:04.588Z', updated_at: '2023-09-09T07:01:04.588Z', subcategory: 'Building',
    }, {
      id: 37, name: 'Fer à béton bar de 10', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694242901/images_41_e87vgq.jpg', unit_price: '5.0', quantity: 30, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T07:01:45.420Z', updated_at: '2023-09-09T07:01:45.420Z', subcategory: 'Building',
    }, {
      id: 38, name: 'Fer à béton bar de 6 gdf', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694242968/images_42_g3dzax.jpg', unit_price: '3.0', quantity: 30, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T07:02:52.476Z', updated_at: '2023-09-09T07:02:52.476Z', subcategory: 'Building',
    }, {
      id: 39, name: 'Fer à béton bar de 6 ptf', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694243012/images_42_dx9xtt.jpg', unit_price: '2.0', quantity: 30, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T07:03:36.161Z', updated_at: '2023-09-09T07:03:36.161Z', subcategory: 'Building',
    }, {
      id: 40, name: '1m Rouleau treillis ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694243060/ajw-grillage-en-acier-soude-galvanise-a-chaud-pour_cr7qvm.jpg', unit_price: '2.0', quantity: 40, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T07:04:28.270Z', updated_at: '2023-09-09T07:04:28.270Z', subcategory: 'Building',
    }, {
      id: 41, name: 'Roofing', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694243117/images_43_a5b4pg.jpg', unit_price: '2.0', quantity: 20, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T07:05:23.644Z', updated_at: '2023-09-09T07:05:23.644Z', subcategory: 'Building',
    }, {
      id: 43, name: 'Kalet', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694243196/images_45_ga0iss.jpg', unit_price: '2.0', quantity: 12, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T07:06:44.457Z', updated_at: '2023-09-09T07:06:44.457Z', subcategory: 'Building',
    }, {
      id: 42, name: 'Pair Poignet ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694243159/images_44_ztmjdt.jpg', unit_price: '3.0', quantity: 6, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T07:06:04.162Z', updated_at: '2023-09-09T07:06:04.162Z', subcategory: 'Building',
    }, {
      id: 44, name: 'Pioche', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694245203/PIOCHE-ROUGE_zlsuk6.jpg', unit_price: '6.0', quantity: 6, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T07:40:08.839Z', updated_at: '2023-09-09T07:40:08.839Z', subcategory: 'Tools',
    }, {
      id: 45, name: 'Bêche ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694245246/pelle-beche-ideal-taille-1-noir-manche-en-frene_jvbexg.jpg', unit_price: '3.0', quantity: 6, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T07:40:49.786Z', updated_at: '2023-09-09T07:40:49.786Z', subcategory: 'Tools',
    }, {
      id: 47, name: '1m Papier émeri ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694245313/images_47_w3by7h.jpg', unit_price: '1.0', quantity: 50, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T07:41:57.584Z', updated_at: '2023-09-09T07:41:57.584Z', subcategory: 'Tools',
    }, {
      id: 48, name: 'Mètre (3m)', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694245371/t%C3%A9l%C3%A9chargement_2_yiep2n.webp', unit_price: '1.5', quantity: 12, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T07:42:54.453Z', updated_at: '2023-09-09T07:42:54.453Z', subcategory: 'Tools',
    }, {
      id: 49, name: 'Lame de scie ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694245498/t%C3%A9l%C3%A9chargement_ygcdcg.png', unit_price: '1.5', quantity: 20, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T07:45:25.358Z', updated_at: '2023-09-09T07:45:25.358Z', subcategory: 'Tools',
    }, {
      id: 50, name: 'Jeux 7 tournevis ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694245715/t%C3%A9l%C3%A9chargement_5_d1n5ak.jpg', unit_price: '9.0', quantity: 2, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T07:48:52.945Z', updated_at: '2023-09-09T07:48:52.945Z', subcategory: 'Tools',
    }, {
      id: 51, name: 'Tuyau PVC 110', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694254037/tuyau_110_qmtaxm.jpg', unit_price: '13.0', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:08:33.494Z', updated_at: '2023-09-09T10:08:33.494Z', subcategory: 'Plumbing',
    }, {
      id: 52, name: 'Tuyau 90', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694254822/tuyau_90_rvn0o7.jpg', unit_price: '9.0', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:20:30.187Z', updated_at: '2023-09-09T10:20:30.187Z', subcategory: 'Plumbing',
    }, {
      id: 53, name: 'Tuyau 63', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694254861/tuyau_63_uijpef.jpg', unit_price: '7.0', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:21:07.052Z', updated_at: '2023-09-09T10:21:07.052Z', subcategory: 'Plumbing',
    }, {
      id: 54, name: 'Tuyau 50', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694254930/tuyau_63_ux2abo.jpg', unit_price: '6.0', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:22:14.709Z', updated_at: '2023-09-09T10:22:14.709Z', subcategory: 'Plumbing',
    }, {
      id: 55, name: 'Tuyau PPR 3/4', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694255388/ppr_3-4_r9njs3.png', unit_price: '5.0', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:29:53.923Z', updated_at: '2023-09-09T10:29:53.923Z', subcategory: 'Plumbing',
    }, {
      id: 56, name: 'Tuyau PPR 1/2', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694255430/PPR_1_-_2_ai0es4.jpg', unit_price: '4.0', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:30:34.484Z', updated_at: '2023-09-09T10:30:34.484Z', subcategory: 'Plumbing',
    }, {
      id: 57, name: 'Coude 110', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694255467/coude_110_kiw9an.jpg', unit_price: '2.0', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:31:14.531Z', updated_at: '2023-09-09T10:31:14.531Z', subcategory: 'Plumbing',
    }, {
      id: 58, name: 'Coude 90', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694255505/coude_90_sc1fsu.jpg', unit_price: '2.0', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:31:49.375Z', updated_at: '2023-09-09T10:31:49.375Z', subcategory: 'Plumbing',
    }, {
      id: 59, name: 'Coude 63', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694255975/coude_63_rnoqxm.webp', unit_price: '1.5', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:39:45.079Z', updated_at: '2023-09-09T10:39:45.079Z', subcategory: 'Plumbing',
    }, {
      id: 61, name: 'Té PVC 110', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694256098/t_110_nfapip.jpg', unit_price: '2.5', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:41:41.963Z', updated_at: '2023-09-09T10:41:41.963Z', subcategory: 'Plumbing',
    }, {
      id: 62, name: 'Té PVC 90', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694256142/t_110_nngpw6.jpg', unit_price: '2.5', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:42:26.291Z', updated_at: '2023-09-09T10:42:26.291Z', subcategory: 'Plumbing',
    }, {
      id: 65, name: 'Col tangite 125g', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694256629/col_pvc_ytsazb.jpg', unit_price: '3.0', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:50:34.887Z', updated_at: '2023-09-09T10:50:34.887Z', subcategory: 'Plumbing',
    }, {
      id: 66, name: 'Coude PPR', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694256662/coude_ppr_uqqdkm.jpg', unit_price: '1.0', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:51:06.346Z', updated_at: '2023-09-09T10:51:06.346Z', subcategory: 'Plumbing',
    }, {
      id: 67, name: 'Té PPR', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694256702/TE-PPR_yrabyf.jpg', unit_price: '1.0', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:51:47.034Z', updated_at: '2023-09-09T10:51:47.034Z', subcategory: 'Plumbing',
    }, {
      id: 68, name: 'Té PVC 63', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694256837/t_110_vhi35i.jpg', unit_price: '1.5', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:54:02.516Z', updated_at: '2023-09-09T10:54:02.516Z', subcategory: 'Plumbing',
    }, {
      id: 69, name: 'Té PVC 50', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694256871/t_110_owwuad.jpg', unit_price: '1.5', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:54:36.205Z', updated_at: '2023-09-09T10:54:36.205Z', subcategory: 'Plumbing',
    }, {
      id: 70, name: 'Coude 50 ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694256951/coude_90_pgkopi.jpg', unit_price: '1.5', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:55:55.615Z', updated_at: '2023-09-09T10:55:55.615Z', subcategory: 'Plumbing',
    }, {
      id: 71, name: 'Pinceau 3"', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694257149/Pinceau-3-pouces_vp2ovj.webp', unit_price: '1.0', quantity: 6, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T10:59:15.281Z', updated_at: '2023-09-09T10:59:15.281Z', subcategory: 'Paint',
    }, {
      id: 72, name: 'Pinceau 2"', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694257215/pinceau_2_ritfzx.jpg', unit_price: '0.8', quantity: 5, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T11:00:19.586Z', updated_at: '2023-09-09T11:00:19.586Z', subcategory: 'Paint',
    }, {
      id: 73, name: 'Rouleau peinture', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694257300/rlx_gd_dxpgt8.webp', unit_price: '2.0', quantity: 6, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T12:09:51.485Z', updated_at: '2023-09-09T12:09:51.485Z', subcategory: 'Paint',
    }, {
      id: 74, name: 'Peinture Basco 1/2l', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694262015/basco_lxboqc.png', unit_price: '2.5', quantity: 24, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T12:20:28.575Z', updated_at: '2023-09-09T12:20:28.575Z', subcategory: 'Paint',
    }, {
      id: 75, name: 'Scotch peintre', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694262075/scotch_peintre_buzd4m.jpg', unit_price: '1.0', quantity: 9, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T12:21:23.142Z', updated_at: '2023-09-09T12:21:23.142Z', subcategory: 'Paint',
    }, {
      id: 76, name: 'Rouleau mf', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694262176/rlx_moyen_x5iug8.jpg', unit_price: '1.0', quantity: 6, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T12:23:20.974Z', updated_at: '2023-09-09T12:23:20.974Z', subcategory: 'Paint',
    }, {
      id: 77, name: 'Rouleau pf', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694262235/rlx_pt_format_x2dajn.jpg', unit_price: '1.0', quantity: 6, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-09T12:24:23.001Z', updated_at: '2023-09-09T12:24:23.001Z', subcategory: 'Paint',
    }, {
      id: 78, name: 'Powerbank Veger', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694487483/verger_fytsty.jpg', unit_price: '15.0', quantity: 2, category: 'Electronics', unit_purchase_price: null, created_at: '2023-09-12T02:58:31.671Z', updated_at: '2023-09-12T02:58:31.671Z', subcategory: 'Telephony',
    }, {
      id: 80, name: 'Mineral Water Sion', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694488121/profil_svjrhj.jpg', unit_price: '4.0', quantity: 1, category: 'Mineral Water', unit_purchase_price: null, created_at: '2023-09-12T03:09:03.712Z', updated_at: '2023-09-12T03:09:03.712Z', subcategory: 'Mineral Water',
    }, {
      id: 82, name: 'Crème glacée', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694488762/creme_dlkpwg.jpg', unit_price: '0.25', quantity: 1, category: 'Beverage Store', unit_purchase_price: null, created_at: '2023-09-12T03:19:26.023Z', updated_at: '2023-09-12T03:19:26.023Z', subcategory: 'Beverage Store',
    }, {
      id: 83, name: 'Build a Web Site', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694489466/porfolio_olk_yuglzb.png', unit_price: '2000.0', quantity: 1, category: 'IT Services', unit_purchase_price: null, created_at: '2023-09-12T03:31:12.124Z', updated_at: '2023-09-12T03:31:12.124Z', subcategory: 'IT Services',
    }, {
      id: 84, name: 'Gas Stove', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694490075/stove_ivhhxs.jpg', unit_price: '50.0', quantity: 1, category: 'Gas Energy', unit_purchase_price: null, created_at: '2023-09-12T03:41:51.204Z', updated_at: '2023-09-12T03:41:51.204Z', subcategory: 'Gas Energy',
    }, {
      id: 85, name: 'Maison à Goma', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694490601/maison_mx5tjp.jpg', unit_price: '70000.0', quantity: 1, category: 'Real Estate', unit_purchase_price: null, created_at: '2023-09-12T03:50:17.317Z', updated_at: '2023-09-12T03:50:17.317Z', subcategory: 'Real Estate',
    }, {
      id: 86, name: 'Lapin', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694490635/lapin_gbfn3t.jpg', unit_price: '10.0', quantity: 11, category: 'Chickens', unit_purchase_price: null, created_at: '2023-09-12T03:50:52.872Z', updated_at: '2023-09-12T03:50:52.872Z', subcategory: 'Chickens',
    }, {
      id: 87, name: 'Boîte de connexion 80x80', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694613997/boite_de_connexion_w9eqz6.jpg', unit_price: '1.0', quantity: 12, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:06:43.139Z', updated_at: '2023-09-13T14:06:43.139Z', subcategory: 'Electrical',
    }, {
      id: 88, name: 'Boîte de connexion 100x100', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694614041/boite_de_connexion_x5ruz5.jpg', unit_price: '1.5', quantity: 12, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:07:26.455Z', updated_at: '2023-09-13T14:07:26.455Z', subcategory: 'Electrical',
    }, {
      id: 89, name: 'Socket ', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694614115/socket_ayfrg6.jpg', unit_price: '0.4', quantity: 12, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:08:40.646Z', updated_at: '2023-09-13T14:08:40.646Z', subcategory: 'Electrical',
    }, {
      id: 90, name: 'Prise Macvi', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694615182/prise_z1n34v.jpg', unit_price: '2.0', quantity: 10, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:27:44.108Z', updated_at: '2023-09-13T14:27:44.108Z', subcategory: 'Electrical',
    }, {
      id: 91, name: 'Interrupteur Yaki', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694615314/interr_pz8hll.jpg', unit_price: '2.0', quantity: 10, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:28:38.327Z', updated_at: '2023-09-13T14:28:38.327Z', subcategory: 'Electrical',
    }, {
      id: 92, name: 'Attaches 18mm', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694615377/attahce_gd_qnoris.jpg', unit_price: '2.5', quantity: 1, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:29:42.818Z', updated_at: '2023-09-13T14:29:42.818Z', subcategory: 'Electrical',
    }, {
      id: 93, name: 'Attaches 22mm', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694615422/attahce_gd_gfbngh.jpg', unit_price: '3.5', quantity: 1, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:30:29.254Z', updated_at: '2023-09-13T14:30:29.254Z', subcategory: 'Electrical',
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
      id: 99, name: 'Prise à bois', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694615919/prise_bois_nlukit.jpg', unit_price: '1.0', quantity: 10, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:38:45.200Z', updated_at: '2023-09-13T14:38:45.200Z', subcategory: 'Electrical',
    }, {
      id: 100, name: 'Interrupteur à bois', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694615996/images_gjlp4a.jpg', unit_price: '1.0', quantity: 10, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:40:03.325Z', updated_at: '2023-09-13T14:40:03.325Z', subcategory: 'Electrical',
    }, {
      id: 101, name: 'Fiche mal', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694616034/fiche_qz3scm.jpg', unit_price: '1.0', quantity: 10, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:40:38.152Z', updated_at: '2023-09-13T14:40:38.152Z', subcategory: 'Electrical',
    }, {
      id: 102, name: 'Câble Yulan 2 X 2.5', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694616124/rouleau_imo1h5.jpg', unit_price: '40.0', quantity: 1, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:42:09.522Z', updated_at: '2023-09-13T14:42:09.522Z', subcategory: 'Electrical',
    }, {
      id: 103, name: 'Câble Yulan 2 X 1.5', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694616422/rouleau_ekpyx6.jpg', unit_price: '35.0', quantity: 1, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:47:13.361Z', updated_at: '2023-09-13T14:47:13.361Z', subcategory: 'Electrical',
    }, {
      id: 104, name: 'Rouleau 1 x 2.5', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694616492/file_yulan_y9xwig.jpg', unit_price: '38.0', quantity: 1, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:48:48.821Z', updated_at: '2023-09-13T14:48:48.821Z', subcategory: 'Electrical',
    }, {
      id: 105, name: 'Vis à bois', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694616585/vis_%C3%A0_bois_crwxil.jpg', unit_price: '0.04', quantity: 725, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:49:49.444Z', updated_at: '2023-09-13T14:49:49.444Z', subcategory: 'Electrical',
    }, {
      id: 106, name: 'Ampoule 12V', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694616638/panneau_yxlm3p.jpg', unit_price: '1.0', quantity: 12, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:50:42.282Z', updated_at: '2023-09-13T14:50:42.282Z', subcategory: 'Electrical',
    }, {
      id: 107, name: 'Ampoule rotative', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694616689/ampoule_40w_pk2fv5.jpg', unit_price: '4.0', quantity: 1, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:51:35.413Z', updated_at: '2023-09-13T14:51:35.413Z', subcategory: 'Electrical',
    }, {
      id: 108, name: 'Attaches 8mm', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694616737/attache_bwlgvb.jpg', unit_price: '1.0', quantity: 4, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:52:21.893Z', updated_at: '2023-09-13T14:52:21.893Z', subcategory: 'Electrical',
    }, {
      id: 109, name: "Boîte d'encastrement", image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694616858/images_3_hwmzvg.jpg', unit_price: '0.6', quantity: 20, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:54:23.683Z', updated_at: '2023-09-13T14:54:23.683Z', subcategory: 'Electrical',
    }, {
      id: 110, name: 'Flexible', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694616927/flexible_e53sne.jpg', unit_price: '11.0', quantity: 1, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-13T14:55:55.092Z', updated_at: '2023-09-13T14:55:55.092Z', subcategory: 'Electrical',
    }, {
      id: 111, name: 'Rallonge', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694673120/rallonge_dwbdk1.jpg', unit_price: '5.0', quantity: 2, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-14T06:32:17.853Z', updated_at: '2023-09-14T06:32:17.853Z', subcategory: 'Electrical',
    }, {
      id: 112, name: 'Kitofu Kale', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694834807/cylindre_kale_grzf7n.jpg', unit_price: '4.0', quantity: 4, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-16T03:26:55.837Z', updated_at: '2023-09-16T03:26:55.837Z', subcategory: 'General',
    }, {
      id: 113, name: 'Cadenas', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694834858/614N6MbRU7L_asvkxd.jpg', unit_price: '5.0', quantity: 12, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-16T03:27:59.968Z', updated_at: '2023-09-16T03:27:59.968Z', subcategory: 'General',
    }, {
      id: 114, name: 'Balais', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694834984/raclette_cmds4s.avif', unit_price: '2.0', quantity: 2, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-16T03:29:50.637Z', updated_at: '2023-09-16T03:29:50.637Z', subcategory: 'General',
    }, {
      id: 115, name: 'Raclette', image: 'https://res.cloudinary.com/du1qvhkp2/image/upload/v1694835015/raclette_mi2jbe.jpg', unit_price: '2.0', quantity: 2, category: 'Hardware Store', unit_purchase_price: null, created_at: '2023-09-16T03:30:21.053Z', updated_at: '2023-09-16T03:30:21.053Z', subcategory: 'General',
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
    default:
      return state;
  }
};

export default reducerProduct;
