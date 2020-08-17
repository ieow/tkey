import { getPublic } from "@toruslabs/eccrypto";
import BN from "bn.js";
import { curve, ec } from "elliptic";

import { ecCurve } from "../utils";
import { BNString } from "./commonTypes";
import Point from "./Point";

// These functions are here because BN can't be extended
export const toPrivKeyEC = (bn: BN): ec.KeyPair => {
  return ecCurve.keyFromPrivate(bn.toString("hex", 64));
};

export const toPrivKeyECC = (bn: BNString): Buffer => {
  const tmp = new BN(bn, "hex");
  return Buffer.from(tmp.toString("hex", 64), "hex");
};

export const getPubKeyEC = (bn: BN): curve.base.BasePoint => {
  return ecCurve.keyFromPrivate(bn.toString("hex", 64)).getPublic();
};

export const getPubKeyECC = (bn: BN): Buffer => {
  return getPublic(toPrivKeyECC(bn));
};

export const getPubKeyPoint = (bn: BN): Point => {
  const pubKeyEc = getPubKeyEC(bn);
  return new Point(pubKeyEc.getX().toString("hex"), pubKeyEc.getY().toString("hex"));
};