// Prevents additional console window on Windows on production
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    launchya_lib::run()
}
