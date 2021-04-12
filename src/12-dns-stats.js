/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainsObj = {};
  domains.forEach((elem) => {
    if (/.\p{L}+$/u.test(elem)) {
      const result = elem.match(/.\p{L}+$/u);
      if (domainsObj[result[0]]) {
        domainsObj[result[0]]++;
      } else {
        domainsObj[result[0]] = 1;
      }
    }
    if (/\p{L}+\.\p{L}+$/u.test(elem)) {
      const result0 = elem.match(/\.\p{L}+$/u);
      const result = elem.match(/\p{L}+(?=\.\p{L}+$)/u);
      const dot = '.';
      if (domainsObj[result0[0] + dot + result[0]]) {
        domainsObj[result0[0] + dot + result[0]]++;
      } else {
        domainsObj[result0[0] + dot + result[0]] = 1;
      }
    }
    if (/^\p{L}+\.\p{L}+\.\p{L}+$/u.test(elem)) {
      const dot = '.';
      const result0 = elem.match(/\.\p{L}+$/u);
      const result1 = elem.match(/\.\p{L}+(?=\.\p{L}+$)/u);
      const result = elem.match(/^\p{L}+(?=\.\p{L}+\.\p{L}+$)/u);
      if (domainsObj[result0[0] + result1[0] + dot + result[0]]) {
        domainsObj[result0[0] + result1[0] + dot + result[0]]++;
      } else {
        domainsObj[result0[0] + result1[0] + dot + result[0]] = 1;
      }
    }
  });
  return domainsObj;
}

module.exports = getDNSStats;
