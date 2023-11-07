import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  themeToggle = false;
  toggleChange(ev : any) {
    this.toggleDarkTheme(ev.detail.checked);
  }
  ngOnInit() {
    let classList = document.body.classList;
    let isDarkThemeExist = (classList.contains("dark"));
    if (isDarkThemeExist) {
      this.initializeDarkTheme(true);
    }
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    prefersDark.addEventListener('change', (mediaQuery) => this.initializeDarkTheme(mediaQuery.matches));
    
  }

  initializeDarkTheme(isDark: any) {
    this.themeToggle = isDark;
    this.toggleDarkTheme(isDark);
  } 

  toggleDarkTheme(shouldAdd: any) {
    document.body.classList.toggle('dark', shouldAdd);
  }
}
