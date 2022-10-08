import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: string;
  department: string;
  semester: string;
  uploadDate: string;
  status: string;
  actions: any[];
}

/** Constants used to fill up our data base. */
const DEPARTMENTS: string[] = [
  'Computer Science and Engineering',
  'Civil Engineering',
  'Printing and Packaging Technology',
  'Electrical Engineering',
  'Department of Psychologoy',
  'Master of Computer Applications',
];
const SEMESTER: string[] = ['4th', '1st', '3rd', '2nd', '5th', '7th', '6th'];
const DATES: string[] = [
  '11.04.2022',
  '19.05.2022',
  '18.03.2022',
  '22.04.2022',
  '20.04.2022',
  '30.03.2022',
  '28.04.2022',
  '19.04.2022',
  '5.04.2022',
];
const STATUS: string[] = ['Pending', 'Approved', 'Declined'];
const ACTIONS: any[] = ['check', 'times'];

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements AfterViewInit {
  actionsIcons = ['check', 'times'];
  availableActions = ['Approve', 'Decline'];

  displayedColumns: string[] = [
    'id',
    'department',
    'semester',
    'uploadDate',
    'actions',
    'status',
  ];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  constructor() {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  // const name =
  //   NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
  //   ' ' +
  //   NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
  //   '.';

  return {
    id: id.toString(),
    department:
      DEPARTMENTS[Math.round(Math.random() * (DEPARTMENTS.length - 1))],
    semester: SEMESTER[Math.round(Math.random() * (SEMESTER.length - 1))],
    uploadDate: DATES[Math.round(Math.random() * (DATES.length - 1))],
    actions: ACTIONS,
    status: STATUS[Math.round(Math.random() * (STATUS.length - 1))],
  };
}
