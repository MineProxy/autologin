# @mineproxy/autologin

> Auto-login plugin for MineProxy

## Installation

In the MineProxy directory run:
```bash
npm install @mineproxy/autologin
```

Add `@mineproxy/autologin` to plugins list

## Configuration

Trigger (the login prompt) cannot be empty or null!

```json
{
  "autologin": {
    "trigger": "",
    "trigger_color": "",
    "users": {}
  }
}
```

## Example config

```json
{
  "autologin": {
    "trigger": "Please, login with the command: /login <password>",
    "trigger_color": "red",
    "users": {
      "Bjornskjald": "MyPassword123"
    }
  }
}
```