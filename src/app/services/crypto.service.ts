import { Injectable } from '@angular/core';
import { enc, AES, mode, pad, MD5 } from 'crypto-js';
import { environment } from '../../environments/environment'
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor() { }

  private static CONFIG = {
    mode: mode.ECB,
    padding: pad.Pkcs7
  };

  encrypt(message: string): string {
    const toEncryptArray = enc.Utf8.parse(message.toString());
    const payload = AES.encrypt(toEncryptArray, this.getKey(), CryptoService.CONFIG);
    return payload.ciphertext.toString(enc.Base64);
  }

  decrypt(message: string): string {

    var toEncryptArray = enc.Base64.parse(message);
    var wordEncrpyt =  CryptoJS.lib.WordArray.create(toEncryptArray.words);
    var cipherEncrpyt = CryptoJS.enc.Base64.stringify(wordEncrpyt);
    const payload = AES.decrypt( cipherEncrpyt, this.getKey(), CryptoService.CONFIG);
    return payload.toString(enc.Utf8);
  }

  private getKey() {
    return enc.Hex.parse(MD5(environment.key).toString());
  }

}
  