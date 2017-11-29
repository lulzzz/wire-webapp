/*
 * Wire
 * Copyright (C) 2017 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */

import {errorHandlerStrings, validationErrorStrings} from '../../strings';
import {FormattedHTMLMessage} from 'react-intl';
import React from 'react';

export function parseError(error) {
  if (error) {
    if (errorHandlerStrings.hasOwnProperty(error.label)) {
      return <FormattedHTMLMessage {...errorHandlerStrings[error.label]} />;
    }
    return <FormattedHTMLMessage {...errorHandlerStrings.unexpected} values={error} />;
  }
}

export function parseValidationErrors(errors) {
  if (errors && errors.length) {
    const errorHtmlArray = [];
    for (const error of errors) {
      if (validationErrorStrings.hasOwnProperty(error.label)) {
        errorHtmlArray.push(
          <span>
            <FormattedHTMLMessage key={errors.indexOf(error)} {...validationErrorStrings[error.label]} />
            <br />
          </span>
        );
      } else {
        errorHtmlArray.push(
          <span>
            <FormattedHTMLMessage key={errors.indexOf(error)} {...validationErrorStrings.unexpected} values={error} />
            <br />
          </span>
        );
      }
    }
    return errorHtmlArray;
  }
}
