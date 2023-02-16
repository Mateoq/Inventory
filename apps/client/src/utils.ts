import {
  Company,
  CompanyMap
} from "./types";

export function hasInteractedWithElement(target: Node, element: Node): boolean {
  let result = false;
  let targetIt = target;

  do {
    if (targetIt === element) {
      result = true;
      break;
    }

    targetIt = targetIt.parentNode as Node;
  } while (targetIt);

  return result;
}

export function formatDate(date: Date | number, withTime = false): string {
  let d: Date;
  if (typeof date === 'number') {
    d = new Date(date);
  } else {
    d = date;
  }

  const day = `${d.getDate()}`.padStart(2, '0');
  const month = `${d.getMonth() + 1}`.padStart(2, '0');
  let result = `${day}/${month}/${d.getFullYear()}`;

  if (withTime) {
    const hours = `${d.getHours()}`.padStart(2, '0');
    const minutes = `${d.getMinutes()}`.padStart(2, '0');
    const seconds = `${d.getSeconds()}`.padStart(2, '0');
    result += ` [${hours}:${minutes}:${seconds}]`;
  }

  return result;
}

export function mapCompanyData(data: Company[]): CompanyMap {
  const result: CompanyMap = {};

  for (const company of data) {
    result[company.id] = company;
  }

  return result;
}

export function sleep(time: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
