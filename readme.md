In the Camera app, on first request of permissions choose "Select Photos"
After selecting some it will reshow the photos again and report a error or crash:

```log
⚡️  To Native ->  App addListener 101900303
2023-05-10 06:27:43.823388-0700 App[8495:1147842] [Accessibility] WKContentView[@] set up: @ pid: @ MACH_PORT 1568804352
⚡️  To Native ->  Camera getPhoto 101900304
2023-05-10 06:28:18.947123-0700 App[8495:1152450] [AXRuntimeCommon] Unknown client: App
2023-05-10 06:28:36.566121-0700 App[8495:1147842] [Accessibility] WKContentView[@] set up: @ pid: @ MACH_PORT 1568804352
2023-05-10 06:28:37.050637-0700 App[8495:1151628] [claims] 3439EE86-4070-411B-A6DE-1213EB6E8955 grantAccessClaim reply is an error: Error Domain=NSCocoaErrorDomain Code=4101 "Couldn’t communicate with a helper application." UserInfo={NSUnderlyingError=0x600002fa5ce0 {Error Domain=PHAssetExportRequestErrorDomain Code=0 "The operation couldn’t be completed. (PHAssetExportRequestErrorDomain error 0.)" UserInfo={NSLocalizedDescription=The operation couldn’t be completed. (PHAssetExportRequestErrorDomain error 0.), NSUnderlyingError=0x600002fa6fa0 {Error Domain=PAMediaConversionServiceErrorDomain Code=2 "The operation couldn’t be completed. (PAMediaConversionServiceErrorDomain error 2.)" UserInfo={NSLocalizedDescription=The operation couldn’t be completed. (PAMediaConversionServiceErrorDomain error 2.)}}}}}
ERROR MESSAGE:  {"errorMessage":"Error loading image","message":"Error loading image"}
⚡️  [error] - {"errorMessage":"Error loading image","message":"Error loading image"}
⚡️  [error] - ERROR Error: Uncaught (in promise): Error: Error loading image
```