import { reqHandler } from '../dist/recolecta/server/server.mjs';

export default function handler(req, res) {
  return new Promise((resolve, reject) => {
    const done = () => resolve();
    res.once('finish', done);
    res.once('error', reject);
    try {
      const result = reqHandler(req, res, (err) => {
        if (err) {
          res.removeListener('finish', done);
          reject(err);
        }
      });
      if (result !== undefined && typeof result.then === 'function') {
        result.then(() => {}).catch(reject);
      }
    } catch (e) {
      res.removeListener('finish', done);
      reject(e);
    }
  });
}
