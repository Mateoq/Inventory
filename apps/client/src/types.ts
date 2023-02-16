// =========================================================
// Enums.
// =========================================================
export enum Color {
  BLACK = 'black',
  WHITE = 'white',
  ERROR = 'error',
  TRANSPARENT = 'transparent',
  GRAY_900 = 'gray900',
  GRAY_800 = 'gray800',
  GRAY_700 = 'gray700',
  GRAY_600 = 'gray600',
  GRAY_500 = 'gray500',
  GRAY_400 = 'gray400',
  GRAY_300 = 'gray300',
  GRAY_200 = 'gray200',
  GRAY_100 = 'gray100',
  GRAY_50 = 'gray50',
  DIM = 'dim'
}

export enum FontWeight {
  THIN = 'thin',
  EXTRA_LIGHT = 'extraLight',
  LIGHT = 'light',
  REGULAR = 'regular',
  MEDIUM = 'medium',
  SEMI_BOLD = 'semiBold',
  BOLD = 'bold',
  EXTRA_BOLD = 'extraBold',
  BLACK = 'black'
}

export enum TextElement {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  PARAGRAPH = 'p',
  SPAN = 'span',
  EMPHASIS = 'em',
  STRONG = 'strong',
  DELETE = 'del'
}

export enum TextType {
  LARGE_HEADING = 'largeHeading',
  HEADING1 = 'heading1',
  HEADING2 = 'heading2',
  HEADING3 = 'heading3',
  PARAGRAPH = 'paragraph',
  PARAGRAPH2 = 'paragraph2',
  CAPTION = 'caption'
}

export enum InputType {
  TEXT = 'text',
  NUMBER = 'number',
  EMAIL = 'email',
  PASSWORD = 'password',
  PHONE = 'phone',
  HIDDEN = 'hidden',
  RADIO = 'radio',
  CHECKBOX = 'checkbox',
}

export enum ButtonType {
  REGULAR = 'button',
  SUBMIT = 'submit'
}

export enum ToastType {
  NOTE = 1,
  ERROR = 2,
  WARNING = 3,
  SUCCESS = 4
}

export enum TextAlignment {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right'
}

export enum DataItemAction {
  NONE = 0,
  EDIT = 1,
  REMOVE = 2
}

export enum PaginationAction {
  NEXT = 1,
  PREV = 2,
}

export enum ModalState {
  NONE = 0,
  COMPANY_FORM = 1,
  SEND_EMAIL = 2,
  CONFIRM_DELETE = 3,
  COMPANY_EDIT = 4
}

export enum UserRole {
  ADMIN = 1,
  VIEWER = 2
}

// =========================================================
// Interfaces.
// =========================================================
export interface GenericMap {
  // eslint-disable-next-line
  [key: string]: any;
}

export interface Company {
  id: string;
  name: string;
  address: string;
  nit: string;
  phone: string;
}

export interface InputCompany {
  name: string;
  address: string;
  nit: string;
  phone: string;
}


export interface InputUpdateCompany {
  name?: string;
  address?: string;
  nit?: string;
  phone?: string;
}

export interface InputLogin {
  email: string;
  password: string;
}

export interface LoginResult {
  email: string;
  role: string;
}

export interface UpdateCompany {
  id: string;
  data: InputUpdateCompany;
}

export interface DeleteCompany {
  id: string;
}

export interface CompanyMap {
  [id: string]: Company;
}

export interface PaginationActionCB {
  (action: PaginationAction): void;
}

export interface DataLapse {
  step: number;
  start: number;
  end: number;
  total: number;
}

export interface CompanyTable {
  [lapse: string]: CompanyMap;
}

export interface CompaniesState {
  list: CompanyMap;
  editCompanyId: string | null;
  removeCompanyId: string | null;
}

export interface CompaniesDataBatch {
  dataLapse: DataLapse;
  companyList: Company[];
}

export interface SessionState {
  email: string | null;
}

export interface ToastState {
  isOpen: boolean;
  message: string;
}

export interface GlobalState {
  toast: ToastState;
  session: SessionState;
  companies: CompaniesState;
}

export interface PaginationParams {
  limit: number;
  start: number;
}
