function FindProxyForURL(url, host) {
    if (shExpMatch(host, "192.168.0.6")) {
        return "PROXY 192.168.0.6:8080";
    }
    return "DIRECT"; // その他の場合はプロキシを使わない
}
