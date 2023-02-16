import {
  PayloadAction,
  createSlice
} from '@reduxjs/toolkit';

import {
  Company,
  CompaniesState,
  GlobalState
} from '@/types';
import { mapCompanyData } from '@/utils';
import { slicerNames } from '@/constants';

const companiesInitialState = {
  list: {},
  editCompanyId: null,
  removeCompanyId: null
};

const companiesSlice = createSlice({
  name: slicerNames.COMPANIES,
  initialState: companiesInitialState,
  reducers: {
    addCompany: (state: CompaniesState, action: PayloadAction<Company>) => {
      const { payload: company } = action;
      state.list[company.id] = company;
    },
    setList: (state: CompaniesState, action: PayloadAction<Company[]>) => {
      const { payload: list } = action;
      const mappedList = mapCompanyData(list);
      state.list = mappedList;
    },
    setEditCompanyId: (state: CompaniesState, action: PayloadAction<string>) => {
      const { payload: id } = action;
      state.editCompanyId = id;
    },
    clearEditCompanyId: (state: CompaniesState) => {
      state.editCompanyId = null;
    },
    setRemoveCompanyId: (state: CompaniesState, action: PayloadAction<string>) => {
      const { payload: id } = action;
      state.removeCompanyId = id;
    },
    clearRemoveCompanyId: (state: CompaniesState) => {
      state.removeCompanyId = null;
    },
    clearCompanies: () => {
      return companiesInitialState;
    },
    updateCompany: (state: CompaniesState, action: PayloadAction<Company>) => {
      const { payload: company } = action;
      state.list[company.id] = company;
    },
    removeCompany: (state: CompaniesState, action: PayloadAction<string>) => {
      const { payload: id } = action;
      delete state.list[id];
    }
  }
});

const {
  addCompany,
  removeCompany,
  setList,
  setEditCompanyId,
  clearEditCompanyId,
  setRemoveCompanyId,
  clearRemoveCompanyId,
  clearCompanies,
  updateCompany
} = companiesSlice.actions;

const selectList = (state: GlobalState) => (state.companies.list);
const selectEditCompanyId = (state: GlobalState) => (state.companies.editCompanyId);
const selectRemoveCompanyId = (state: GlobalState) => (state.companies.removeCompanyId);


const companiesReducer = companiesSlice.reducer;

export {
  companiesReducer,
  addCompany,
  removeCompany,
  setList,
  setEditCompanyId,
  clearEditCompanyId,
  setRemoveCompanyId,
  clearRemoveCompanyId,
  clearCompanies,
  updateCompany,
  selectList,
  selectEditCompanyId,
  selectRemoveCompanyId
};
