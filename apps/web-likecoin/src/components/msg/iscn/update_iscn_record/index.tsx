import React from 'react';
import numeral from 'numeral';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import Name from '@components/name';
import { MsgUpdateIscnRecord } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const UpdateIscnRecord = (props: {
  message: MsgUpdateIscnRecord;
}) => {
  const { message } = props;

  const from = useProfileRecoil(message.from);
  const fromMoniker = from ? from?.name : message.from;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txUpdateIscnRecordContent"
        components={[
          (
            <Name
              address={message.from}
              name={fromMoniker}
            />
          ),
          <b />,
        ]}
        values={{
          iscnId: numeral(message.iscnId).format('0,0'),
        }}
      />
    </Typography>
  );
};

export default UpdateIscnRecord;