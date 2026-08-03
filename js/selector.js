// ========================================
// GLOBAL VARIABLES
// ========================================
const photos = ["imagenes/1.webp?v=3","imagenes/2.webp?v=3","imagenes/3.webp?v=3","imagenes/4.webp?v=3","imagenes/5.webp?v=3","imagenes/6.webp?v=3","imagenes/7.webp?v=3","imagenes/9.webp?v=3","imagenes/10.webp?v=3","imagenes/12.webp?v=3","imagenes/13.webp?v=3","imagenes/15.webp?v=3","imagenes/DJI_20260506111757_0062_D.webp?v=3","imagenes/DJI_20260517120231_0001_D.MP4_snapshot_00.28.528.webp?v=3","imagenes/DJI_20260517120231_0001_D.MP4_snapshot_00.28.528 - copia.webp?v=3","imagenes/DJI_20260517120231_0001_D.MP4_snapshot_00.43.543.webp?v=3","imagenes/DJI_20260517120231_0001_D.MP4_snapshot_00.43.543 - copia.webp?v=3","imagenes/DJI_20260517120231_0001_D.MP4_snapshot_00.53.553.webp?v=3","imagenes/DJI_20260517120231_0001_D.MP4_snapshot_01.03.563.webp?v=3","imagenes/DJI_20260517120231_0001_D.MP4_snapshot_01.16.460.webp?v=3","imagenes/DJI_20260517120231_0001_D.MP4_snapshot_01.22.601.webp?v=3","imagenes/DJI_20260517120231_0001_D.MP4_snapshot_01.23.735.webp?v=3","imagenes/DJI_20260517120231_0001_D.MP4_snapshot_02.16.001.webp?v=3","imagenes/DJI_20260517120231_0001_D.MP4_snapshot_03.00.180.webp?v=3","imagenes/DJI_20260517120231_0001_D.MP4_snapshot_03.05.185.webp?v=3","imagenes/DJI_20260517120231_0001_D.MP4_snapshot_03.05.185 - copia.webp?v=3","imagenes/DJI_20260517120231_0001_D.MP4_snapshot_03.07.135.webp?v=3","imagenes/DJI_20260517120231_0001_D.MP4_snapshot_03.07.135 - copia.webp?v=3","imagenes/DJI_20260517120231_0001_D.MP4_snapshot_03.12.192.webp?v=3","imagenes/DJI_20260517120231_0001_D.MP4_snapshot_03.12.192 - copia.webp?v=3","imagenes/DJI_20260517120231_0001_D.MP4_snapshot_03.17.197.webp?v=3","imagenes/DJI_20260517120231_0001_D.MP4_snapshot_03.17.197 - copia.webp?v=3","imagenes/DJI_20260517120231_0001_D.MP4_snapshot_03.32.212.webp?v=3","imagenes/DJI_20260517120231_0001_D.MP4_snapshot_03.54.410.webp?v=3","imagenes/DJI_20260517120231_0001_D.MP4_snapshot_04.44.284.webp?v=3","imagenes/DJI_20260517120231_0001_D.MP4_snapshot_04.49.289.webp?v=3","imagenes/DJI_20260517120231_0001_D.MP4_snapshot_04.54.294.webp?v=3","imagenes/DJI_20260517120231_0001_D.MP4_snapshot_04.59.299.webp?v=3","imagenes/DJI_20260517120231_0001_D.MP4_snapshot_05.04.304.webp?v=3","imagenes/DJI_20260517120231_0001_D.MP4_snapshot_05.14.314.webp?v=3","imagenes/DJI_20260517120231_0001_D.MP4_snapshot_05.29.329.webp?v=3","imagenes/DJI_20260517120231_0001_D.MP4_snapshot_05.44.844.webp?v=3","imagenes/DJI_20260517120231_0001_D.MP4_snapshot_05.49.849.webp?v=3","imagenes/DJI_20260517120231_0001_D.MP4_snapshot_05.54.854.webp?v=3","imagenes/DJI_20260517120231_0001_D.MP4_snapshot_06.14.874.webp?v=3","imagenes/DJI_20260517122823_0002_D.webp?v=3","imagenes/DJI_20260517122832_0003_D.webp?v=3","imagenes/DJI_20260517150449_0009_D.webp?v=3","imagenes/DJI_20260517150458_0010_D.webp?v=3","imagenes/DJI_20260517150513_0012_D.MP4_snapshot_00.25.025.webp?v=3","imagenes/DJI_20260517150513_0012_D.MP4_snapshot_00.30.030.webp?v=3","imagenes/DJI_20260517150513_0012_D.MP4_snapshot_00.35.035.webp?v=3","imagenes/DJI_20260517150513_0012_D.MP4_snapshot_00.40.040.webp?v=3","imagenes/DJI_20260517150513_0012_D.MP4_snapshot_01.00.060.webp?v=3","imagenes/DJI_20260517150513_0012_D.MP4_snapshot_01.05.065.webp?v=3","imagenes/DJI_20260517150513_0012_D.MP4_snapshot_01.10.070.webp?v=3","imagenes/DSC_9458.webp?v=3","imagenes/DSC_9459.webp?v=3","imagenes/DSC_9459 - copia.webp?v=3","imagenes/DSC_9460.webp?v=3","imagenes/DSC_9460 - copia.webp?v=3","imagenes/DSC_9462.webp?v=3","imagenes/DSC_9463.webp?v=3","imagenes/DSC_9464.webp?v=3","imagenes/DSC_9465.webp?v=3","imagenes/DSC_9466.webp?v=3","imagenes/DSC_9467.webp?v=3","imagenes/DSC_9468.webp?v=3","imagenes/DSC_9469.webp?v=3","imagenes/DSC_9470.webp?v=3","imagenes/DSC_9473.webp?v=3","imagenes/DSC_9474.webp?v=3","imagenes/DSC_9475.webp?v=3","imagenes/DSC_9476.webp?v=3","imagenes/DSC_9477.webp?v=3","imagenes/DSC_9478.webp?v=3","imagenes/DSC_9479.webp?v=3","imagenes/DSC_9480.webp?v=3","imagenes/DSC_9481.webp?v=3","imagenes/DSC_9482.webp?v=3","imagenes/DSC_9483.webp?v=3","imagenes/DSC_9484.webp?v=3","imagenes/DSC_9485.webp?v=3","imagenes/DSC_9486.webp?v=3","imagenes/DSC_9487.webp?v=3","imagenes/DSC_9488.webp?v=3","imagenes/DSC_9489.webp?v=3","imagenes/DSC_9490.webp?v=3","imagenes/DSC_9491.webp?v=3","imagenes/DSC_9492.webp?v=3","imagenes/DSC_9493.webp?v=3","imagenes/DSC_9494.webp?v=3","imagenes/DSC_9495.webp?v=3","imagenes/DSC_9496.webp?v=3","imagenes/DSC_9497.webp?v=3","imagenes/DSC_9498.webp?v=3","imagenes/DSC_9499.webp?v=3","imagenes/DSC_9500.webp?v=3","imagenes/DSC_9501.webp?v=3","imagenes/DSC_9502.webp?v=3","imagenes/DSC_9503.webp?v=3","imagenes/DSC_9504.webp?v=3","imagenes/DSC_9505.webp?v=3","imagenes/DSC_9506.webp?v=3","imagenes/DSC_9507.webp?v=3","imagenes/DSC_9508.webp?v=3","imagenes/DSC_9509.webp?v=3","imagenes/DSC_9510.webp?v=3","imagenes/DSC_9511.webp?v=3","imagenes/DSC_9512.webp?v=3","imagenes/DSC_9513.webp?v=3","imagenes/DSC_9514.webp?v=3","imagenes/DSC_9515.webp?v=3","imagenes/DSC_9516.webp?v=3","imagenes/DSC_9517.webp?v=3","imagenes/DSC_9518.webp?v=3","imagenes/DSC_9519.webp?v=3","imagenes/DSC_9520.webp?v=3","imagenes/DSC_9521.webp?v=3","imagenes/DSC_9522.webp?v=3","imagenes/DSC_9523.webp?v=3","imagenes/DSC_9524.webp?v=3","imagenes/DSC_9525.webp?v=3","imagenes/DSC_9526.webp?v=3","imagenes/DSC_9527.webp?v=3","imagenes/DSC_9528.webp?v=3","imagenes/DSC_9529.webp?v=3","imagenes/DSC_9530.webp?v=3","imagenes/DSC_9531.webp?v=3","imagenes/DSC_9532.webp?v=3","imagenes/DSC_9533.webp?v=3","imagenes/DSC_9534.webp?v=3","imagenes/DSC_9535.webp?v=3","imagenes/DSC_9536.webp?v=3","imagenes/DSC_9537.webp?v=3","imagenes/DSC_9538.webp?v=3","imagenes/DSC_9539.webp?v=3","imagenes/DSC_9540.webp?v=3","imagenes/DSC_9541.webp?v=3","imagenes/DSC_9542.webp?v=3","imagenes/DSC_9543.webp?v=3","imagenes/DSC_9544.webp?v=3","imagenes/DSC_9545.webp?v=3","imagenes/DSC_9546.webp?v=3","imagenes/DSC_9547.webp?v=3","imagenes/DSC_9548.webp?v=3","imagenes/DSC_9549.webp?v=3","imagenes/DSC_9550.webp?v=3","imagenes/DSC_9551.webp?v=3","imagenes/DSC_9552.webp?v=3","imagenes/DSC_9553.webp?v=3","imagenes/DSC_9554.webp?v=3","imagenes/DSC_9555.webp?v=3","imagenes/DSC_9556.webp?v=3","imagenes/DSC_9557.webp?v=3","imagenes/DSC_9558.webp?v=3","imagenes/DSC_9559.webp?v=3","imagenes/DSC_9560.webp?v=3","imagenes/DSC_9561.webp?v=3","imagenes/DSC_9562.webp?v=3","imagenes/DSC_9563.webp?v=3","imagenes/DSC_9564.webp?v=3","imagenes/DSC_9565.webp?v=3","imagenes/DSC_9566.webp?v=3","imagenes/DSC_9567.webp?v=3","imagenes/DSC_9568.webp?v=3","imagenes/DSC_9569.webp?v=3","imagenes/DSC_9570.webp?v=3","imagenes/DSC_9571.webp?v=3","imagenes/DSC_9572.webp?v=3","imagenes/DSC_9573.webp?v=3","imagenes/DSC_9574.webp?v=3","imagenes/DSC_9575.webp?v=3","imagenes/DSC_9576.webp?v=3","imagenes/DSC_9577.webp?v=3","imagenes/DSC_9578.webp?v=3","imagenes/DSC_9579.webp?v=3","imagenes/DSC_9580.webp?v=3","imagenes/DSC_9581.webp?v=3","imagenes/DSC_9582.webp?v=3","imagenes/DSC_9583.webp?v=3","imagenes/DSC_9584.webp?v=3","imagenes/DSC_9585.webp?v=3","imagenes/DSC_9586.webp?v=3","imagenes/DSC_9587.webp?v=3","imagenes/DSC_9588.webp?v=3","imagenes/DSC_9589.webp?v=3","imagenes/DSC_9590.webp?v=3","imagenes/DSC_9591.webp?v=3","imagenes/DSC_9592.webp?v=3","imagenes/DSC_9593.webp?v=3","imagenes/DSC_9594.webp?v=3","imagenes/DSC_9595.webp?v=3","imagenes/DSC_9596.webp?v=3","imagenes/DSC_9597.webp?v=3","imagenes/DSC_9598.webp?v=3","imagenes/DSC_9599.webp?v=3","imagenes/DSC_9600.webp?v=3","imagenes/DSC_9601.webp?v=3","imagenes/DSC_9602.webp?v=3","imagenes/DSC_9603.webp?v=3","imagenes/DSC_9604.webp?v=3","imagenes/DSC_9605.webp?v=3","imagenes/DSC_9606.webp?v=3","imagenes/DSC_9608.webp?v=3","imagenes/DSC_9609.webp?v=3","imagenes/DSC_9610.webp?v=3","imagenes/DSC_9611.webp?v=3","imagenes/DSC_9612.webp?v=3","imagenes/DSC_9613.webp?v=3","imagenes/DSC_9614.webp?v=3","imagenes/DSC_9615.webp?v=3","imagenes/DSC_9616.webp?v=3","imagenes/DSC_9617.webp?v=3","imagenes/IMG_4475.webp?v=3","imagenes/IMG_4476.webp?v=3","imagenes/IMG_4477.webp?v=3","imagenes/IMG_4480.webp?v=3","imagenes/IMG_4481.webp?v=3","imagenes/DSC_4841.webp?v=3","imagenes/DSC_4842.webp?v=3","imagenes/DSC_4843.webp?v=3","imagenes/DSC_4844.webp?v=3","imagenes/DSC_4845.webp?v=3","imagenes/DSC_4846.webp?v=3","imagenes/DSC_4847.webp?v=3","imagenes/DSC_4848.webp?v=3","imagenes/DSC_4849.webp?v=3","imagenes/DSC_4850.webp?v=3","imagenes/DSC_4851.webp?v=3","imagenes/DSC_4852.webp?v=3","imagenes/DSC_4853.webp?v=3","imagenes/DSC_4854.webp?v=3","imagenes/DSC_4855.webp?v=3","imagenes/DSC_4856.webp?v=3","imagenes/DSC_4857.webp?v=3","imagenes/DSC_4858.webp?v=3","imagenes/DSC_4859.webp?v=3","imagenes/DSC_4860.webp?v=3","imagenes/DSC_4861.webp?v=3","imagenes/DSC_4862.webp?v=3","imagenes/DSC_4863.webp?v=3","imagenes/DSC_4864.webp?v=3","imagenes/DSC_4865.webp?v=3","imagenes/DSC_4866.webp?v=3","imagenes/DSC_4867.webp?v=3","imagenes/DSC_4868.webp?v=3","imagenes/DSC_4869.webp?v=3","imagenes/DSC_4870.webp?v=3","imagenes/DSC_4871.webp?v=3","imagenes/DSC_4872.webp?v=3","imagenes/DSC_4873.webp?v=3","imagenes/DSC_4874.webp?v=3","imagenes/DSC_4875.webp?v=3","imagenes/DSC_4876.webp?v=3","imagenes/DSC_4877.webp?v=3","imagenes/DSC_4878.webp?v=3","imagenes/DSC_4879.webp?v=3","imagenes/DSC_4880.webp?v=3","imagenes/DSC_4881.webp?v=3","imagenes/DSC_4882.webp?v=3","imagenes/DSC_4883.webp?v=3","imagenes/DSC_4884.webp?v=3","imagenes/DSC_4885.webp?v=3","imagenes/DSC_4886.webp?v=3","imagenes/DSC_4887.webp?v=3","imagenes/DSC_4888.webp?v=3","imagenes/DSC_4889.webp?v=3","imagenes/DSC_4890.webp?v=3","imagenes/DSC_4891.webp?v=3","imagenes/DSC_4892.webp?v=3","imagenes/DSC_4893.webp?v=3","imagenes/DSC_4894.webp?v=3","imagenes/DSC_4895.webp?v=3","imagenes/DSC_4896.webp?v=3","imagenes/DSC_4897.webp?v=3","imagenes/DSC_4898.webp?v=3","imagenes/DSC_4899.webp?v=3","imagenes/DSC_4900.webp?v=3","imagenes/DSC_4901.webp?v=3","imagenes/DSC_4902.webp?v=3","imagenes/DSC_4903.webp?v=3","imagenes/DSC_4904.webp?v=3","imagenes/DSC_4905.webp?v=3","imagenes/DSC_4906.webp?v=3","imagenes/DSC_4907.webp?v=3","imagenes/DSC_4908.webp?v=3","imagenes/DSC_4909.webp?v=3","imagenes/DSC_4910.webp?v=3","imagenes/DSC_4911.webp?v=3","imagenes/DSC_4912.webp?v=3","imagenes/DSC_4913.webp?v=3","imagenes/DSC_4914.webp?v=3","imagenes/DSC_4915.webp?v=3","imagenes/DSC_4916.webp?v=3","imagenes/DSC_4917.webp?v=3","imagenes/DSC_4918.webp?v=3","imagenes/DSC_4919.webp?v=3","imagenes/DSC_4920.webp?v=3","imagenes/DSC_4921.webp?v=3","imagenes/DSC_4922.webp?v=3","imagenes/DSC_4923.webp?v=3","imagenes/DSC_4924.webp?v=3","imagenes/DSC_4925.webp?v=3","imagenes/DSC_4926.webp?v=3","imagenes/DSC_4927.webp?v=3","imagenes/DSC_4928.webp?v=3","imagenes/DSC_4929.webp?v=3","imagenes/DSC_4930.webp?v=3","imagenes/DSC_4931.webp?v=3","imagenes/DSC_4932.webp?v=3","imagenes/DSC_4933.webp?v=3","imagenes/DSC_4934.webp?v=3","imagenes/DSC_4935.webp?v=3","imagenes/DSC_4936.webp?v=3","imagenes/DSC_4937.webp?v=3","imagenes/DSC_4938.webp?v=3","imagenes/DSC_4939.webp?v=3","imagenes/DSC_4940.webp?v=3","imagenes/DSC_4941.webp?v=3","imagenes/DSC_4942.webp?v=3","imagenes/DSC_4943.webp?v=3","imagenes/DSC_4944.webp?v=3","imagenes/DSC_4945.webp?v=3","imagenes/DSC_4946.webp?v=3","imagenes/DSC_4947.webp?v=3","imagenes/DSC_4948.webp?v=3","imagenes/DSC_4949.webp?v=3","imagenes/DSC_4950.webp?v=3","imagenes/DSC_4951.webp?v=3","imagenes/DSC_4952.webp?v=3","imagenes/DSC_4953.webp?v=3","imagenes/DSC_4954.webp?v=3","imagenes/DSC_4955.webp?v=3","imagenes/DSC_4956.webp?v=3","imagenes/DSC_4957.webp?v=3","imagenes/DSC_4958.webp?v=3","imagenes/DSC_4959.webp?v=3","imagenes/DSC_4960.webp?v=3","imagenes/DSC_4961.webp?v=3","imagenes/DSC_4962.webp?v=3","imagenes/DSC_4963.webp?v=3","imagenes/DSC_4964.webp?v=3","imagenes/DSC_4965.webp?v=3","imagenes/DSC_4966.webp?v=3","imagenes/DSC_4967.webp?v=3","imagenes/DSC_4968.webp?v=3","imagenes/DSC_4969.webp?v=3","imagenes/DSC_4970.webp?v=3","imagenes/DSC_4971.webp?v=3","imagenes/DSC_4972.webp?v=3","imagenes/DSC_4973.webp?v=3","imagenes/DSC_4974.webp?v=3","imagenes/DSC_4975.webp?v=3","imagenes/DSC_4976.webp?v=3","imagenes/DSC_4977.webp?v=3","imagenes/DSC_4978.webp?v=3","imagenes/DSC_4979.webp?v=3","imagenes/DSC_4980.webp?v=3","imagenes/DSC_4981.webp?v=3","imagenes/DSC_4982.webp?v=3","imagenes/DSC_4983.webp?v=3","imagenes/DSC_4984.webp?v=3","imagenes/DSC_4985.webp?v=3","imagenes/DSC_4986.webp?v=3","imagenes/DSC_4987.webp?v=3","imagenes/DSC_4988.webp?v=3","imagenes/DSC_4989.webp?v=3","imagenes/DSC_4990.webp?v=3","imagenes/DSC_4991.webp?v=3","imagenes/DSC_4992.webp?v=3","imagenes/DSC_4993.webp?v=3","imagenes/DSC_4994.webp?v=3","imagenes/DSC_4995.webp?v=3","imagenes/DSC_4996.webp?v=3","imagenes/DSC_4997.webp?v=3","imagenes/DSC_4998.webp?v=3","imagenes/DSC_4999.webp?v=3","imagenes/DSC_5000.webp?v=3","imagenes/DSC_5001.webp?v=3","imagenes/DSC_5002.webp?v=3","imagenes/DSC_5003.webp?v=3","imagenes/DSC_5004.webp?v=3","imagenes/DSC_5005.webp?v=3","imagenes/DSC_5006.webp?v=3","imagenes/DSC_5007.webp?v=3","imagenes/DSC_5008.webp?v=3","imagenes/DSC_5009.webp?v=3","imagenes/DSC_5010.webp?v=3","imagenes/DSC_5011.webp?v=3","imagenes/DSC_5012.webp?v=3","imagenes/DSC_5013.webp?v=3","imagenes/DSC_5014.webp?v=3","imagenes/DSC_5015.webp?v=3","imagenes/DSC_5016.webp?v=3","imagenes/DSC_5017.webp?v=3","imagenes/DSC_5018.webp?v=3","imagenes/DSC_5019.webp?v=3","imagenes/DSC_5020.webp?v=3","imagenes/DSC_5021.webp?v=3","imagenes/DSC_5022.webp?v=3","imagenes/DSC_5023.webp?v=3","imagenes/DSC_5024.webp?v=3","imagenes/DSC_5025.webp?v=3","imagenes/DSC_5026.webp?v=3","imagenes/DSC_5027.webp?v=3","imagenes/DSC_5028.webp?v=3","imagenes/DSC_5029.webp?v=3","imagenes/DSC_5030.webp?v=3","imagenes/DSC_5031.webp?v=3","imagenes/DSC_5032.webp?v=3","imagenes/DSC_5033.webp?v=3","imagenes/DSC_5034.webp?v=3","imagenes/DSC_5035.webp?v=3","imagenes/DSC_5036.webp?v=3","imagenes/DSC_5037.webp?v=3","imagenes/DSC_5038.webp?v=3","imagenes/DSC_5039.webp?v=3","imagenes/DSC_5040.webp?v=3","imagenes/DSC_5041.webp?v=3","imagenes/DSC_5042.webp?v=3","imagenes/DSC_5043.webp?v=3","imagenes/DSC_5044.webp?v=3","imagenes/DSC_5045.webp?v=3","imagenes/DSC_5046.webp?v=3","imagenes/DSC_5047.webp?v=3","imagenes/DSC_5048.webp?v=3","imagenes/DSC_5049.webp?v=3","imagenes/DSC_5050.webp?v=3","imagenes/DSC_5051.webp?v=3","imagenes/DSC_5052.webp?v=3","imagenes/DSC_5053.webp?v=3","imagenes/DSC_5054.webp?v=3","imagenes/DSC_5055.webp?v=3","imagenes/DSC_5056.webp?v=3","imagenes/DSC_5057.webp?v=3","imagenes/DSC_5058.webp?v=3","imagenes/DSC_5059.webp?v=3","imagenes/DSC_5060.webp?v=3","imagenes/DSC_5061.webp?v=3","imagenes/DSC_5062.webp?v=3","imagenes/DSC_5063.webp?v=3","imagenes/DSC_5064.webp?v=3","imagenes/DSC_5065.webp?v=3","imagenes/DSC_5066.webp?v=3","imagenes/DSC_5067.webp?v=3","imagenes/DSC_5068.webp?v=3","imagenes/DSC_5069.webp?v=3","imagenes/DSC_5070.webp?v=3","imagenes/DSC_5071.webp?v=3","imagenes/DSC_5072.webp?v=3","imagenes/DSC_5073.webp?v=3","imagenes/DSC_5074.webp?v=3","imagenes/DSC_5075.webp?v=3","imagenes/DSC_5076.webp?v=3","imagenes/DSC_5077.webp?v=3","imagenes/DSC_5078.webp?v=3","imagenes/DSC_5079.webp?v=3","imagenes/DSC_5080.webp?v=3","imagenes/DSC_5081.webp?v=3","imagenes/DSC_5082.webp?v=3","imagenes/DSC_5083.webp?v=3","imagenes/DSC_5084.webp?v=3","imagenes/DSC_5085.webp?v=3","imagenes/DSC_5086.webp?v=3","imagenes/DSC_5087.webp?v=3","imagenes/DSC_5088.webp?v=3","imagenes/DSC_5089.webp?v=3","imagenes/DSC_5090.webp?v=3","imagenes/DSC_5091.webp?v=3","imagenes/DSC_5092.webp?v=3","imagenes/DSC_5093.webp?v=3","imagenes/DSC_5094.webp?v=3","imagenes/DSC_5095.webp?v=3","imagenes/DSC_5096.webp?v=3","imagenes/DSC_5097.webp?v=3","imagenes/DSC_5098.webp?v=3","imagenes/DSC_5099.webp?v=3","imagenes/DSC_5100.webp?v=3","imagenes/DSC_5101.webp?v=3","imagenes/DSC_5102.webp?v=3","imagenes/DSC_5103.webp?v=3","imagenes/DSC_5104.webp?v=3","imagenes/DSC_5105.webp?v=3","imagenes/DSC_5106.webp?v=3","imagenes/DSC_5107.webp?v=3","imagenes/DSC_5108.webp?v=3","imagenes/DSC_5109.webp?v=3","imagenes/DSC_5110.webp?v=3","imagenes/DSC_5111.webp?v=3","imagenes/DSC_5112.webp?v=3","imagenes/DSC_5113.webp?v=3","imagenes/DSC_5114.webp?v=3","imagenes/DSC_5115.webp?v=3","imagenes/DSC_5116.webp?v=3","imagenes/DSC_5117.webp?v=3","imagenes/DSC_5118.webp?v=3","imagenes/DSC_5119.webp?v=3","imagenes/DSC_5120.webp?v=3","imagenes/DSC_5121.webp?v=3","imagenes/DSC_5122.webp?v=3","imagenes/DSC_5123.webp?v=3","imagenes/DSC_5124.webp?v=3","imagenes/DSC_5125.webp?v=3","imagenes/DSC_5126.webp?v=3","imagenes/DSC_5127.webp?v=3","imagenes/DSC_5128.webp?v=3","imagenes/DSC_5129.webp?v=3","imagenes/DSC_5130.webp?v=3","imagenes/DSC_5131.webp?v=3","imagenes/DSC_5132.webp?v=3","imagenes/DSC_5133.webp?v=3","imagenes/DSC_5134.webp?v=3","imagenes/DSC_5135.webp?v=3","imagenes/DSC_5136.webp?v=3","imagenes/DSC_5137.webp?v=3","imagenes/DSC_5138.webp?v=3","imagenes/DSC_5139.webp?v=3","imagenes/DSC_5140.webp?v=3","imagenes/DSC_5141.webp?v=3","imagenes/DSC_5142.webp?v=3","imagenes/DSC_5143.webp?v=3","imagenes/DSC_5144.webp?v=3","imagenes/DSC_5145.webp?v=3","imagenes/DSC_5146.webp?v=3","imagenes/DSC_5147.webp?v=3","imagenes/DSC_5148.webp?v=3","imagenes/DSC_5149.webp?v=3","imagenes/DSC_5150.webp?v=3","imagenes/DSC_5151.webp?v=3","imagenes/DSC_5152.webp?v=3","imagenes/DSC_5153.webp?v=3","imagenes/DSC_5154.webp?v=3","imagenes/DSC_5155.webp?v=3","imagenes/DSC_5156.webp?v=3","imagenes/DSC_5157.webp?v=3","imagenes/DSC_5158.webp?v=3","imagenes/DSC_5159.webp?v=3","imagenes/DSC_5160.webp?v=3","imagenes/DSC_5161.webp?v=3","imagenes/DSC_5162.webp?v=3","imagenes/DSC_5163.webp?v=3","imagenes/DSC_5164.webp?v=3","imagenes/DSC_5165.webp?v=3","imagenes/DSC_5166.webp?v=3","imagenes/DSC_5167.webp?v=3","imagenes/DSC_5168.webp?v=3","imagenes/DSC_5169.webp?v=3","imagenes/DSC_5170.webp?v=3","imagenes/DSC_5171.webp?v=3","imagenes/DSC_5172.webp?v=3","imagenes/DSC_5173.webp?v=3","imagenes/DSC_5174.webp?v=3","imagenes/DSC_5175.webp?v=3","imagenes/DSC_5176.webp?v=3","imagenes/DSC_5177.webp?v=3","imagenes/DSC_5178.webp?v=3","imagenes/DSC_5179.webp?v=3","imagenes/DSC_5180.webp?v=3","imagenes/DSC_5181.webp?v=3","imagenes/DSC_5182.webp?v=3","imagenes/DSC_5183.webp?v=3","imagenes/DSC_5184.webp?v=3","imagenes/DSC_5185.webp?v=3","imagenes/DSC_5186.webp?v=3","imagenes/DSC_5187.webp?v=3","imagenes/DSC_5188.webp?v=3","imagenes/DSC_5189.webp?v=3","imagenes/DSC_5190.webp?v=3","imagenes/DSC_5191.webp?v=3","imagenes/DSC_5192.webp?v=3","imagenes/DSC_5193.webp?v=3","imagenes/DSC_5194.webp?v=3","imagenes/DSC_5195.webp?v=3","imagenes/DSC_5196.webp?v=3","imagenes/DSC_5197.webp?v=3","imagenes/DSC_5198.webp?v=3","imagenes/DSC_5199.webp?v=3","imagenes/DSC_5200.webp?v=3","imagenes/DSC_5201.webp?v=3","imagenes/DSC_5202.webp?v=3","imagenes/DSC_5203.webp?v=3","imagenes/DSC_5204.webp?v=3","imagenes/DSC_5205.webp?v=3","imagenes/DSC_5206.webp?v=3","imagenes/DSC_5207.webp?v=3","imagenes/DSC_5208.webp?v=3","imagenes/DSC_5209.webp?v=3","imagenes/DSC_5210.webp?v=3","imagenes/DSC_5211.webp?v=3","imagenes/DSC_5212.webp?v=3","imagenes/DSC_5213.webp?v=3","imagenes/DSC_5214.webp?v=3","imagenes/DSC_5215.webp?v=3","imagenes/DSC_5216.webp?v=3","imagenes/DSC_5217.webp?v=3","imagenes/DSC_5218.webp?v=3","imagenes/DSC_5219.webp?v=3","imagenes/DSC_5220.webp?v=3","imagenes/DSC_5221.webp?v=3","imagenes/DSC_5222.webp?v=3","imagenes/DSC_5223.webp?v=3","imagenes/DSC_5224.webp?v=3","imagenes/DSC_5225.webp?v=3","imagenes/DSC_5226.webp?v=3","imagenes/DSC_5227.webp?v=3","imagenes/DSC_5228.webp?v=3","imagenes/DSC_5229.webp?v=3","imagenes/DSC_5230.webp?v=3","imagenes/DSC_5231.webp?v=3","imagenes/DSC_5232.webp?v=3","imagenes/DSC_5233.webp?v=3","imagenes/DSC_5234.webp?v=3","imagenes/DSC_5235.webp?v=3","imagenes/DSC_5236.webp?v=3","imagenes/DSC_5237.webp?v=3","imagenes/DSC_5238.webp?v=3","imagenes/DSC_5239.webp?v=3","imagenes/DSC_5240.webp?v=3","imagenes/DSC_5241.webp?v=3","imagenes/DSC_5242.webp?v=3","imagenes/DSC_5243.webp?v=3","imagenes/DSC_5244.webp?v=3","imagenes/DSC_5245.webp?v=3","imagenes/DSC_5246.webp?v=3","imagenes/DSC_5247.webp?v=3","imagenes/DSC_5248.webp?v=3","imagenes/DSC_5249.webp?v=3","imagenes/DSC_5250.webp?v=3","imagenes/DSC_5251.webp?v=3","imagenes/DSC_5252.webp?v=3","imagenes/DSC_5253.webp?v=3","imagenes/DSC_5254.webp?v=3","imagenes/DSC_5255.webp?v=3","imagenes/DSC_5256.webp?v=3","imagenes/DSC_5257.webp?v=3","imagenes/DSC_5258.webp?v=3","imagenes/DSC_5259.webp?v=3","imagenes/DSC_5260.webp?v=3","imagenes/DSC_5261.webp?v=3","imagenes/DSC_5262.webp?v=3","imagenes/DSC_5263.webp?v=3","imagenes/DSC_5264.webp?v=3","imagenes/DSC_5265.webp?v=3","imagenes/DSC_5266.webp?v=3","imagenes/DSC_5267.webp?v=3","imagenes/DSC_5268.webp?v=3","imagenes/DSC_5269.webp?v=3","imagenes/DSC_5270.webp?v=3","imagenes/DSC_5271.webp?v=3","imagenes/DSC_5272.webp?v=3","imagenes/DSC_5273.webp?v=3","imagenes/DSC_5274.webp?v=3","imagenes/DSC_5275.webp?v=3","imagenes/DSC_5276.webp?v=3","imagenes/DSC_5277.webp?v=3","imagenes/DSC_5278.webp?v=3","imagenes/DSC_5279.webp?v=3","imagenes/DSC_5280.webp?v=3","imagenes/DSC_5281.webp?v=3","imagenes/DSC_5282.webp?v=3","imagenes/DSC_5283.webp?v=3","imagenes/DSC_5284.webp?v=3","imagenes/DSC_5285.webp?v=3","imagenes/DSC_5286.webp?v=3","imagenes/DSC_5287.webp?v=3","imagenes/DSC_5288.webp?v=3","imagenes/DSC_5289.webp?v=3","imagenes/DSC_5290.webp?v=3","imagenes/DSC_5291.webp?v=3","imagenes/DSC_5292.webp?v=3","imagenes/DSC_5293.webp?v=3","imagenes/DSC_5294.webp?v=3","imagenes/DSC_5295.webp?v=3","imagenes/DSC_5296.webp?v=3","imagenes/DSC_5297.webp?v=3","imagenes/DSC_5298.webp?v=3","imagenes/DSC_5299.webp?v=3","imagenes/DSC_5300.webp?v=3","imagenes/DSC_5301.webp?v=3","imagenes/DSC_5302.webp?v=3","imagenes/DSC_5303.webp?v=3","imagenes/DSC_5304.webp?v=3","imagenes/DSC_5305.webp?v=3","imagenes/DSC_5306.webp?v=3","imagenes/DSC_5307.webp?v=3","imagenes/DSC_5308.webp?v=3","imagenes/DSC_5309.webp?v=3","imagenes/DSC_5310.webp?v=3","imagenes/DSC_5311.webp?v=3","imagenes/DSC_5312.webp?v=3","imagenes/DSC_5313.webp?v=3","imagenes/DSC_5314.webp?v=3","imagenes/DSC_5315.webp?v=3","imagenes/DSC_5316.webp?v=3","imagenes/DSC_5317.webp?v=3","imagenes/DSC_5318.webp?v=3","imagenes/DSC_5319.webp?v=3","imagenes/DSC_5320.webp?v=3","imagenes/DSC_5321.webp?v=3","imagenes/DSC_5322.webp?v=3","imagenes/DSC_5323.webp?v=3","imagenes/DSC_5324.webp?v=3","imagenes/DSC_5325.webp?v=3","imagenes/DSC_5326.webp?v=3","imagenes/DSC_5327.webp?v=3","imagenes/DSC_5328.webp?v=3","imagenes/DSC_5329.webp?v=3","imagenes/DSC_5330.webp?v=3","imagenes/DSC_5331.webp?v=3","imagenes/DSC_5332.webp?v=3","imagenes/DSC_5333.webp?v=3","imagenes/DSC_5334.webp?v=3","imagenes/DSC_5335.webp?v=3","imagenes/DSC_5336.webp?v=3","imagenes/DSC_5337.webp?v=3","imagenes/DSC_5338.webp?v=3","imagenes/DSC_5339.webp?v=3","imagenes/DSC_5340.webp?v=3","imagenes/DSC_5341.webp?v=3","imagenes/DSC_5342.webp?v=3","imagenes/DSC_5343.webp?v=3","imagenes/DSC_5344.webp?v=3","imagenes/DSC_5345.webp?v=3","imagenes/DSC_5346.webp?v=3","imagenes/DSC_5347.webp?v=3","imagenes/DSC_5348.webp?v=3","imagenes/DSC_5349.webp?v=3","imagenes/DSC_5350.webp?v=3","imagenes/DSC_5351.webp?v=3","imagenes/DSC_5352.webp?v=3","imagenes/DSC_5353.webp?v=3","imagenes/DSC_5354.webp?v=3","imagenes/DSC_5355.webp?v=3","imagenes/DSC_5356.webp?v=3","imagenes/DSC_5357.webp?v=3","imagenes/DSC_5358.webp?v=3","imagenes/DSC_5359.webp?v=3","imagenes/DSC_5360.webp?v=3","imagenes/DSC_5361.webp?v=3","imagenes/DSC_5362.webp?v=3","imagenes/DSC_5363.webp?v=3","imagenes/DSC_5364.webp?v=3","imagenes/DSC_5365.webp?v=3","imagenes/DSC_5366.webp?v=3","imagenes/DSC_5367.webp?v=3","imagenes/DSC_5368.webp?v=3","imagenes/DSC_5369.webp?v=3","imagenes/DSC_5370.webp?v=3","imagenes/DSC_5371.webp?v=3","imagenes/DSC_5372.webp?v=3","imagenes/DSC_5373.webp?v=3","imagenes/DSC_5374.webp?v=3","imagenes/DSC_5375.webp?v=3","imagenes/DSC_5376.webp?v=3","imagenes/DSC_5377.webp?v=3","imagenes/DSC_5378.webp?v=3","imagenes/DSC_5379.webp?v=3","imagenes/DSC_5380.webp?v=3","imagenes/DSC_5381.webp?v=3","imagenes/DSC_5382.webp?v=3","imagenes/DSC_5383.webp?v=3","imagenes/DSC_5384.webp?v=3","imagenes/DSC_5385.webp?v=3","imagenes/DSC_5386.webp?v=3","imagenes/DSC_5387.webp?v=3","imagenes/DSC_5388.webp?v=3","imagenes/DSC_5389.webp?v=3","imagenes/DSC_5390.webp?v=3","imagenes/DSC_5391.webp?v=3","imagenes/DSC_5392.webp?v=3","imagenes/DSC_5393.webp?v=3","imagenes/DSC_5394.webp?v=3","imagenes/DSC_5395.webp?v=3","imagenes/DSC_5396.webp?v=3","imagenes/DSC_5397.webp?v=3","imagenes/DSC_5398.webp?v=3","imagenes/DSC_5399.webp?v=3","imagenes/DSC_5400.webp?v=3","imagenes/DSC_5401.webp?v=3","imagenes/DSC_5402.webp?v=3","imagenes/DSC_5403.webp?v=3","imagenes/DSC_5404.webp?v=3","imagenes/DSC_5405.webp?v=3","imagenes/DSC_5406.webp?v=3","imagenes/DSC_5407.webp?v=3","imagenes/DSC_5408.webp?v=3","imagenes/DSC_5409.webp?v=3","imagenes/DSC_5410.webp?v=3","imagenes/DSC_5411.webp?v=3","imagenes/DSC_5412.webp?v=3","imagenes/DSC_5413.webp?v=3","imagenes/DSC_5414.webp?v=3","imagenes/DSC_5415.webp?v=3","imagenes/DSC_5416.webp?v=3","imagenes/DSC_5417.webp?v=3","imagenes/DSC_5418.webp?v=3","imagenes/DSC_5419.webp?v=3","imagenes/DSC_5420.webp?v=3","imagenes/DSC_5421.webp?v=3","imagenes/DSC_5422.webp?v=3","imagenes/DSC_5423.webp?v=3","imagenes/DSC_5424.webp?v=3","imagenes/DSC_5425.webp?v=3","imagenes/DSC_5426.webp?v=3","imagenes/DSC_5427.webp?v=3","imagenes/DSC_5428.webp?v=3","imagenes/DSC_5429.webp?v=3","imagenes/DSC_5430.webp?v=3","imagenes/DSC_5431.webp?v=3","imagenes/DSC_5432.webp?v=3","imagenes/DSC_5433.webp?v=3","imagenes/DSC_5434.webp?v=3","imagenes/DSC_5435.webp?v=3","imagenes/DSC_5436.webp?v=3","imagenes/DSC_5437.webp?v=3","imagenes/DSC_5438.webp?v=3","imagenes/DSC_5439.webp?v=3","imagenes/DSC_5440.webp?v=3","imagenes/DSC_5441.webp?v=3","imagenes/DSC_5442.webp?v=3","imagenes/DSC_5443.webp?v=3","imagenes/DSC_5444.webp?v=3","imagenes/DSC_5445.webp?v=3","imagenes/DSC_5446.webp?v=3","imagenes/DSC_5447.webp?v=3","imagenes/DSC_5448.webp?v=3","imagenes/DSC_5451.webp?v=3","imagenes/DSC_5452.webp?v=3","imagenes/DSC_5453.webp?v=3","imagenes/DSC_5454.webp?v=3","imagenes/DSC_5455.webp?v=3","imagenes/DSC_5456.webp?v=3","imagenes/DSC_5457.webp?v=3","imagenes/DSC_5458.webp?v=3","imagenes/DSC_5459.webp?v=3","imagenes/DSC_5460.webp?v=3","imagenes/DSC_5461.webp?v=3","imagenes/DSC_5462.webp?v=3","imagenes/DSC_5463.webp?v=3","imagenes/DSC_5464.webp?v=3","imagenes/DSC_5465.webp?v=3","imagenes/DSC_5466.webp?v=3","imagenes/DSC_5467.webp?v=3","imagenes/DSC_5468.webp?v=3","imagenes/DSC_5469.webp?v=3","imagenes/DSC_5470.webp?v=3","imagenes/DSC_5471.webp?v=3","imagenes/DSC_5472.webp?v=3","imagenes/DSC_5473.webp?v=3","imagenes/DSC_5474.webp?v=3","imagenes/DSC_5475.webp?v=3","imagenes/DSC_5476.webp?v=3","imagenes/DSC_5477.webp?v=3","imagenes/DSC_5478.webp?v=3","imagenes/DSC_5479.webp?v=3","imagenes/DSC_5480.webp?v=3","imagenes/DSC_5481.webp?v=3","imagenes/DSC_5482.webp?v=3","imagenes/DSC_5483.webp?v=3","imagenes/DSC_5484.webp?v=3","imagenes/DSC_5485.webp?v=3","imagenes/DSC_5486.webp?v=3","imagenes/DSC_5487.webp?v=3","imagenes/DSC_5488.webp?v=3","imagenes/DSC_5489.webp?v=3","imagenes/DSC_5490.webp?v=3","imagenes/DSC_5491.webp?v=3","imagenes/DSC_5492.webp?v=3","imagenes/DSC_5493.webp?v=3","imagenes/DSC_5494.webp?v=3","imagenes/DSC_5495.webp?v=3","imagenes/DSC_5496.webp?v=3","imagenes/DSC_5497.webp?v=3","imagenes/DSC_5498.webp?v=3","imagenes/DSC_5499.webp?v=3","imagenes/DSC_5500.webp?v=3","imagenes/DSC_5501.webp?v=3","imagenes/DSC_5502.webp?v=3","imagenes/DSC_5503.webp?v=3","imagenes/DSC_5504.webp?v=3","imagenes/DSC_5505.webp?v=3","imagenes/DSC_5506.webp?v=3","imagenes/DSC_5507.webp?v=3","imagenes/DSC_5508.webp?v=3","imagenes/DSC_5509.webp?v=3","imagenes/DSC_5510.webp?v=3","imagenes/DSC_5511.webp?v=3","imagenes/DSC_5512.webp?v=3","imagenes/DSC_5513.webp?v=3","imagenes/DSC_5514.webp?v=3","imagenes/DSC_5515.webp?v=3","imagenes/DSC_5516.webp?v=3","imagenes/DSC_5517.webp?v=3","imagenes/DSC_5518.webp?v=3","imagenes/DSC_5519.webp?v=3","imagenes/DSC_5520.webp?v=3","imagenes/DSC_5521.webp?v=3","imagenes/DSC_5522.webp?v=3","imagenes/DSC_5523.webp?v=3","imagenes/DSC_5524.webp?v=3","imagenes/DSC_5525.webp?v=3","imagenes/DSC_5526.webp?v=3","imagenes/DSC_5527.webp?v=3","imagenes/DSC_5528.webp?v=3","imagenes/DSC_5529.webp?v=3","imagenes/DSC_5530.webp?v=3","imagenes/DSC_5531.webp?v=3","imagenes/DSC_5532.webp?v=3","imagenes/DSC_5533.webp?v=3","imagenes/DSC_5534.webp?v=3","imagenes/DSC_5535.webp?v=3","imagenes/DSC_5536.webp?v=3","imagenes/DSC_5537.webp?v=3","imagenes/DSC_5538.webp?v=3","imagenes/DSC_5539.webp?v=3","imagenes/DSC_5540.webp?v=3","imagenes/DSC_5541.webp?v=3","imagenes/DSC_5542.webp?v=3","imagenes/DSC_5543.webp?v=3","imagenes/DSC_5544.webp?v=3","imagenes/DSC_5545.webp?v=3","imagenes/DSC_5546.webp?v=3","imagenes/DSC_5547.webp?v=3","imagenes/DSC_5548.webp?v=3","imagenes/DSC_5549.webp?v=3","imagenes/DSC_5550.webp?v=3","imagenes/DSC_5551.webp?v=3","imagenes/DSC_5552.webp?v=3","imagenes/DSC_5553.webp?v=3","imagenes/DSC_5554.webp?v=3","imagenes/DSC_5555.webp?v=3","imagenes/DSC_5556.webp?v=3","imagenes/DSC_5557.webp?v=3","imagenes/DSC_5558.webp?v=3","imagenes/DSC_5559.webp?v=3","imagenes/DSC_5560.webp?v=3","imagenes/DSC_5561.webp?v=3","imagenes/DSC_5562.webp?v=3","imagenes/DSC_5563.webp?v=3","imagenes/DSC_5564.webp?v=3","imagenes/DSC_5565.webp?v=3","imagenes/DSC_5566.webp?v=3","imagenes/DSC_5567.webp?v=3","imagenes/DSC_5568.webp?v=3","imagenes/DSC_5569.webp?v=3","imagenes/DSC_5570.webp?v=3","imagenes/DSC_5571.webp?v=3","imagenes/DSC_5572.webp?v=3","imagenes/DSC_5573.webp?v=3","imagenes/DSC_5574.webp?v=3","imagenes/DSC_5575.webp?v=3","imagenes/DSC_5576.webp?v=3","imagenes/DSC_5577.webp?v=3","imagenes/DSC_5578.webp?v=3","imagenes/DSC_5579.webp?v=3","imagenes/DSC_5580.webp?v=3","imagenes/DSC_5581.webp?v=3","imagenes/DSC_5582.webp?v=3","imagenes/DSC_5583.webp?v=3","imagenes/DSC_5584.webp?v=3","imagenes/DSC_5585.webp?v=3","imagenes/DSC_5586.webp?v=3","imagenes/DSC_5587.webp?v=3","imagenes/DSC_5588.webp?v=3","imagenes/DSC_5589.webp?v=3","imagenes/DSC_5590.webp?v=3","imagenes/DSC_5591.webp?v=3","imagenes/DSC_5592.webp?v=3","imagenes/DSC_5593.webp?v=3","imagenes/DSC_5594.webp?v=3","imagenes/DSC_5595.webp?v=3","imagenes/DSC_5596.webp?v=3","imagenes/DSC_5597.webp?v=3","imagenes/DSC_5598.webp?v=3","imagenes/DSC_5599.webp?v=3","imagenes/DSC_5600.webp?v=3","imagenes/DSC_5601.webp?v=3","imagenes/DSC_5602.webp?v=3","imagenes/DSC_5603.webp?v=3","imagenes/DSC_5604.webp?v=3","imagenes/DSC_5605.webp?v=3","imagenes/DSC_5606.webp?v=3","imagenes/DSC_5607.webp?v=3","imagenes/DSC_5608.webp?v=3","imagenes/DSC_5609.webp?v=3","imagenes/DSC_5610.webp?v=3","imagenes/DSC_5611.webp?v=3","imagenes/DSC_5612.webp?v=3","imagenes/DSC_5613.webp?v=3","imagenes/DSC_5614.webp?v=3","imagenes/DSC_5615.webp?v=3","imagenes/DSC_5616.webp?v=3","imagenes/DSC_5617.webp?v=3","imagenes/DSC_5618.webp?v=3","imagenes/DSC_5619.webp?v=3","imagenes/DSC_5620.webp?v=3","imagenes/DSC_5621.webp?v=3","imagenes/DSC_5622.webp?v=3","imagenes/DSC_5623.webp?v=3","imagenes/DSC_5624.webp?v=3","imagenes/DSC_5625.webp?v=3","imagenes/DSC_5626.webp?v=3","imagenes/DSC_5627.webp?v=3"];
const STORAGE_KEY = 'invitacion_jennifer_xv_photo_selections';
const LIMITES = {
    ampliacion: null,
    impresion: null,
    invitacion: null
};
let photoSelections = {};
let currentPhotoIndex = null;
let currentFilter = 'all';
const PAGE_SIZE = 60;
const PAGE_KEY = 'invitacion_jennifer_xv_page';
let currentPage = parseInt(sessionStorage.getItem(PAGE_KEY) || '0', 10);

// Thumbnail helper: convierte 'imagenes/foto.webp' -> 'imagenes/thumb/foto.webp'
function getThumbPath(fullPath) {
    return fullPath.replace('imagenes/', 'imagenes/thumb/');
}

// ========================================
// LOCAL STORAGE FUNCTIONS
// ========================================
function loadSelections() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            photoSelections = JSON.parse(saved);
        }
    } catch (error) {
        console.error('Error cargando selecciones:', error);
        photoSelections = {};
    }
}

function normalizeSelection(selection) {
    return {
        ampliacion: !!(selection && selection.ampliacion),
        impresion: !!(selection && selection.impresion),
        invitacion: !!(selection && selection.invitacion),
        descartada: !!(selection && selection.descartada)
    };
}

function hasAnySelection(selection) {
    const normalized = normalizeSelection(selection);
    return normalized.ampliacion || normalized.impresion || normalized.invitacion || normalized.descartada;
}

function selectionsAreEqual(a, b) {
    const left = normalizeSelection(a);
    const right = normalizeSelection(b);
    return left.ampliacion === right.ampliacion
        && left.impresion === right.impresion
        && left.invitacion === right.invitacion
        && left.descartada === right.descartada;
}

function saveSelections(options) {
    const shouldSync = !options || options.sync !== false;
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections));
    } catch (error) {
        showToast('Error al guardar. Verifica el espacio del navegador.', 'error');
    }
    if (shouldSync && typeof sbUpsertSelections === 'function') {
        sbUpsertSelections().catch(function(e) { console.warn('[Supabase] Sync:', e.message); });
    }
}

function clearAllSelections() {
    if (confirm('¿Estás seguro de que quieres borrar TODAS las selecciones? Esta acción no se puede deshacer.')) {
        photoSelections = {};
        try { localStorage.setItem(STORAGE_KEY, '{}'); } catch(e) {}
        if (typeof sbDeleteAll === 'function') {
            sbDeleteAll().catch(function(e) { console.warn('[Supabase] DeleteAll:', e.message); });
        }
        renderGallery();
        updateStats();
        updateFilterButtons();
        showToast('Todas las selecciones han sido eliminadas', 'success');
    }
}

// ========================================
// STATS FUNCTIONS
// ========================================
function getStats() {
    const stats = {
        ampliacion: 0,
        impresion: 0,
        invitacion: 0,
        descartada: 0,
        sinClasificar: photos.length
    };

    Object.values(photoSelections).forEach(selection => {
        if (selection.ampliacion) stats.ampliacion++;
        if (selection.impresion) stats.impresion++;
        if (selection.invitacion) stats.invitacion++;
        if (selection.descartada) stats.descartada++;
    });

    stats.sinClasificar = photos.length - Object.keys(photoSelections).length;

    return stats;
}

function updateStats() {
    const stats = getStats();

    document.getElementById('countAmpliacion').textContent = stats.ampliacion;
    document.getElementById('countImpresion').textContent = stats.impresion;
    document.getElementById('countInvitacion').textContent = stats.invitacion;
    document.getElementById('countDescartada').textContent = stats.descartada;
    document.getElementById('countSinClasificar').textContent = stats.sinClasificar;
}

// ========================================
// GALLERY FUNCTIONS
// ========================================
function getFilteredIndices() {
    const indices = [];
    for (let i = 0; i < photos.length; i++) {
        const sel = photoSelections[i] || {};
        let show = false;
        switch (currentFilter) {
            case 'all': show = true; break;
            case 'ampliacion': show = sel.ampliacion === true; break;
            case 'impresion': show = sel.impresion === true; break;
            case 'invitacion': show = sel.invitacion === true; break;
            case 'descartada': show = sel.descartada === true; break;
            case 'sin-clasificar': show = !sel.ampliacion && !sel.impresion && !sel.invitacion && !sel.descartada; break;
        }
        if (show) indices.push(i);
    }
    return indices;
}

function getTotalPages() {
    return Math.ceil(getFilteredIndices().length / PAGE_SIZE);
}

function getPagePhotos() {
    const filtered = getFilteredIndices();
    const start = currentPage * PAGE_SIZE;
    const end = Math.min(start + PAGE_SIZE, filtered.length);
    return { indices: filtered.slice(start, end), total: filtered.length, start, end };
}

function goToPage(page) {
    const total = getTotalPages();
    if (page < 0) page = 0;
    if (page >= total) page = total - 1;
    currentPage = page;
    try { sessionStorage.setItem(PAGE_KEY, String(currentPage)); } catch(e) {}
    renderGallery();
    updateStats();
    updateFilterButtons();
    window.scrollTo({ top: document.querySelector('.gallery-section').offsetTop - 10, behavior: 'smooth' });
}

function renderPagination(container) {
    const totalPages = getTotalPages();
    if (totalPages <= 1) return;

    const pageData = getPagePhotos();
    const nav = document.createElement('div');
    nav.className = 'pagination-nav';
    nav.style.cssText = 'grid-column:1/-1;display:flex;align-items:center;justify-content:center;gap:8px;flex-wrap:wrap;padding:16px 0;';

    const btnStyle = 'border:none;padding:10px 18px;border-radius:25px;font-size:.95rem;font-weight:600;cursor:pointer;font-family:Lato,sans-serif;transition:all .2s;';

    if (currentPage > 0) {
        const prev = document.createElement('button');
        prev.textContent = '← Anterior';
        prev.style.cssText = btnStyle + 'background:#4A0000;color:#fff;';
        prev.addEventListener('click', () => goToPage(currentPage - 1));
        nav.appendChild(prev);
    }

    const maxBtns = 7;
    let pageStart = Math.max(0, currentPage - 3);
    let pageEnd = Math.min(totalPages, pageStart + maxBtns);
    if (pageEnd - pageStart < maxBtns) pageStart = Math.max(0, pageEnd - maxBtns);

    for (let i = pageStart; i < pageEnd; i++) {
        const btn = document.createElement('button');
        btn.textContent = i + 1;
        const isActive = i === currentPage;
        btn.style.cssText = btnStyle + (isActive
            ? 'background:#8B0000;color:#fff;transform:scale(1.1);'
            : 'background:#eee;color:#333;');
        if (!isActive) btn.addEventListener('click', () => goToPage(i));
        nav.appendChild(btn);
    }

    if (currentPage < totalPages - 1) {
        const next = document.createElement('button');
        next.textContent = 'Siguiente →';
        next.style.cssText = btnStyle + 'background:#4A0000;color:#fff;';
        next.addEventListener('click', () => goToPage(currentPage + 1));
        nav.appendChild(next);
    }

    const info = document.createElement('div');
    info.style.cssText = 'grid-column:1/-1;text-align:center;color:#888;font-size:.85rem;padding:4px 0;';
    info.textContent = `Fotos ${pageData.start + 1}–${pageData.end} de ${pageData.total}`;

    container.appendChild(info);
    container.appendChild(nav);
}

function renderGallery() {
    const grid = document.getElementById('photosGrid');
    if (!grid) return;
    const topPag = document.getElementById('paginationTop');
    const bottomPag = document.getElementById('paginationBottom');

    grid.innerHTML = '';
    if (topPag) topPag.innerHTML = '';
    if (bottomPag) bottomPag.innerHTML = '';

    const filtered = getFilteredIndices();
    if (filtered.length === 0) {
        grid.innerHTML = currentFilter === 'all'
            ? '<div class="no-photos-message">No hay fotos disponibles aún.</div>'
            : '<div class="no-photos-message">No hay fotos en esta categoría.</div>';
        return;
    }

    const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
    if (currentPage >= totalPages) currentPage = totalPages - 1;
    if (currentPage < 0) currentPage = 0;

    if (topPag) renderPagination(topPag);

    const pageStart = currentPage * PAGE_SIZE;
    const pageEnd = Math.min(pageStart + PAGE_SIZE, filtered.length);

    for (let fi = pageStart; fi < pageEnd; fi++) {
        const index = filtered[fi];
        const photo = photos[index];
        const selection = photoSelections[index] || {};
        const hasAny = selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada;

        const card = document.createElement('div');
        card.className = 'photo-card';
        card.dataset.index = index;

        if (selection.descartada) {
            card.classList.add('has-descartada');
        } else {
            const categories = [];
            if (selection.ampliacion) categories.push('ampliacion');
            if (selection.impresion) categories.push('impresion');
            if (selection.invitacion) categories.push('invitacion');

            if (categories.length > 1) {
                card.classList.add('has-multiple');
            } else if (categories.length === 1) {
                card.classList.add(`has-${categories[0]}`);
            }
        }

        let badgesHTML = '';
        if (hasAny) {
            badgesHTML = '<div class="photo-badges">';
            if (selection.ampliacion) badgesHTML += '<span class="badge badge-ampliacion">🖼️ Ampliación</span>';
            if (selection.impresion) badgesHTML += '<span class="badge badge-impresion">📸 Impresión</span>';
            if (selection.invitacion) badgesHTML += '<span class="badge badge-invitacion">💌 Invitación</span>';
            if (selection.descartada) badgesHTML += '<span class="badge badge-descartada">❌ Descartada</span>';
            badgesHTML += '</div>';
        }

        const displayNumber = `Foto ${index + 1}`;
        card.innerHTML = `
            <div class="photo-image-container">
                <img src="${getThumbPath(photo)}" alt="${displayNumber}" loading="lazy">
            </div>
            <div class="photo-number">${displayNumber}</div>
            ${badgesHTML}
        `;

        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    }

    if (bottomPag) renderPagination(bottomPag);
}

// ========================================
// FILTER FUNCTIONS
// ========================================
function setFilter(filter) {
    currentFilter = filter;
    currentPage = 0;
    renderGallery();
    updateStats();

    document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (activeBtn) activeBtn.classList.add('active');
}

function updateFilterButtons() {
    const stats = getStats();
    document.getElementById('btnFilterAll').textContent = `Todas (${photos.length})`;
    document.getElementById('btnFilterAmpliacion').textContent = `Ampliación (${stats.ampliacion})`;
    document.getElementById('btnFilterImpresion').textContent = `Impresión (${stats.impresion})`;
    document.getElementById('btnFilterInvitacion').textContent = `Invitación (${stats.invitacion})`;
    document.getElementById('btnFilterDescartada').textContent = `Descartadas (${stats.descartada})`;
    document.getElementById('btnFilterSinClasificar').textContent = `Sin Clasificar (${stats.sinClasificar})`;
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(index) {
    currentPhotoIndex = index;
    const modal = document.getElementById('photoModal');
    const modalImageContainer = document.querySelector('.modal-image-container');
    const photo = photos[index];
    const displayNumber = `Foto ${index + 1}`;

    modalImageContainer.innerHTML = `
        <img id="modalImage" src="${photo}" alt="${displayNumber}">
        <div class="modal-photo-number" id="modalPhotoNumber">${displayNumber}</div>
    `;

    const selection = photoSelections[index] || {};
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.toggle('selected', selection[btn.dataset.category] === true);
    });

    modal.classList.add('active');
    updateNavigationButtons();
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    saveCurrentSelections();
    renderGallery();
    document.getElementById('photoModal').classList.remove('active');
    document.body.style.overflow = 'auto';
    currentPhotoIndex = null;
}

// ========================================
// NAVIGATION FUNCTIONS
// ========================================
function navigatePhoto(direction) {
    if (currentPhotoIndex === null) return;
    let newIndex;
    if (direction === "next") {
        newIndex = currentPhotoIndex + 1;
        if (newIndex >= photos.length) newIndex = 0;
    } else {
        newIndex = currentPhotoIndex - 1;
        if (newIndex < 0) newIndex = photos.length - 1;
    }
    saveCurrentSelections();
    openModal(newIndex);
}

function saveCurrentSelections() {
    if (currentPhotoIndex === null) return;
    const selectedCategories = {};
    document.querySelectorAll(".option-btn").forEach(btn => {
        selectedCategories[btn.dataset.category] = btn.classList.contains("selected");
    });
    persistPhotoSelection(currentPhotoIndex, selectedCategories);
    updateStats();
    updateFilterButtons();
}

function persistPhotoSelection(index, selection, options) {
    const previousSelection = photoSelections[index] || {};
    const normalized = normalizeSelection(selection);
    const changed = !selectionsAreEqual(previousSelection, normalized);
    const silent = options && options.silent;

    if (!changed) { saveSelections({ sync: false }); return false; }

    if (hasAnySelection(normalized)) {
        photoSelections[index] = normalized;
        saveSelections({ sync: false });
        if (typeof sbSaveSelection === 'function') {
            sbSaveSelection(index, normalized).catch(function(e) { console.warn('[Supabase] Save:', e.message); });
        }
    } else {
        delete photoSelections[index];
        saveSelections({ sync: false });
        if (typeof sbDeleteSelection === 'function') {
            sbDeleteSelection(index).catch(function(e) { console.warn('[Supabase] Delete:', e.message); });
        }
    }

    if (!silent) showToast('Selección actualizada', 'success');
    return true;
}

function updateNavigationButtons() {
    const btnPrev = document.getElementById("btnPrevPhoto");
    const btnNext = document.getElementById("btnNextPhoto");
    if (btnPrev && btnNext) { btnPrev.disabled = false; btnNext.disabled = false; }
}

function saveModalSelection() {
    if (currentPhotoIndex === null) return;
    const selectedCategories = {};
    document.querySelectorAll('.option-btn').forEach(btn => {
        selectedCategories[btn.dataset.category] = btn.classList.contains('selected');
    });
    persistPhotoSelection(currentPhotoIndex, selectedCategories, { silent: true });
    renderGallery();
    updateStats();
    updateFilterButtons();
    closeModal();
    showToast('Selección guardada correctamente', 'success');
}

function deleteCurrentSelection() {
    if (currentPhotoIndex === null) return;
    if (!confirm('¿Borrar la selección de la foto ' + (currentPhotoIndex + 1) + '?')) return;
    persistPhotoSelection(currentPhotoIndex, {}, { silent: true });
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    renderGallery();
    updateStats();
    updateFilterButtons();
    closeModal();
    showToast('Selección borrada', 'success');
}

// ========================================
// EXPORT FUNCTIONS
// ========================================
function exportToJSON() {
    const exportData = {
        evento: 'XV Años — Jennifer Guadalupe',
        fecha_exportacion: new Date().toISOString(),
        total_fotos: photos.length,
        estadisticas: getStats(),
        selecciones: []
    };

    photos.forEach((photo, index) => {
        const selection = photoSelections[index];
        if (selection && (selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada)) {
            exportData.selecciones.push({
                numero_foto: index + 1,
                archivo: photo,
                ampliacion: selection.ampliacion || false,
                impresion: selection.impresion || false,
                invitacion: selection.invitacion || false,
                descartada: selection.descartada || false
            });
        }
    });

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seleccion-fotos-xv-jennifer-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Reporte descargado correctamente', 'success');
}

function generateTextSummary() {
    const stats = getStats();
    let summary = '👑 SELECCIÓN DE FOTOS - XV AÑOS JENNIFER GUADALUPE\n';
    summary += '═══════════════════════════════════════════════════\n\n';
    summary += `📊 RESUMEN:\n`;
    summary += `   Total de fotos: ${photos.length}\n`;
    summary += `   🖼️  Para ampliación: ${stats.ampliacion}\n`;
    summary += `   📸 Para impresión: ${stats.impresion}\n`;
    summary += `   💌 Para invitación: ${stats.invitacion}\n`;
    summary += `   ❌ Descartadas: ${stats.descartada}\n`;
    summary += `   ⭕ Sin clasificar: ${stats.sinClasificar}\n\n`;

    const categories = ['ampliacion', 'impresion', 'invitacion', 'descartada'];
    const categoryNames = {
        ampliacion: '🖼️  AMPLIACIÓN',
        impresion: '📸 IMPRESIÓN',
        invitacion: '💌 INVITACIÓN',
        descartada: '❌ DESCARTADAS'
    };

    categories.forEach(category => {
        const photosInCategory = [];
        photos.forEach((photo, index) => {
            if (photoSelections[index] && photoSelections[index][category]) {
                photosInCategory.push(index + 1);
            }
        });
        if (photosInCategory.length > 0) {
            summary += `${categoryNames[category]}:\n`;
            summary += `   Fotos: ${photosInCategory.join(', ')}\n`;
            summary += `   Total: ${photosInCategory.length}\n\n`;
        }
    });

    summary += `\n📅 Generado el: ${new Date().toLocaleString('es-MX')}\n`;
    return summary;
}

function copyToClipboard() {
    navigator.clipboard.writeText(generateTextSummary()).then(() => {
        showToast('Resumen copiado al portapapeles', 'success');
    }).catch(() => {
        showToast('No se pudo copiar. Selecciona el texto manualmente.', 'error');
    });
}

// ========================================
// TOAST
// ========================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    loadSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();

    document.getElementById('btnFilterAll').addEventListener('click', () => setFilter('all'));
    document.getElementById('btnFilterAmpliacion').addEventListener('click', () => setFilter('ampliacion'));
    document.getElementById('btnFilterImpresion').addEventListener('click', () => setFilter('impresion'));
    document.getElementById('btnFilterInvitacion').addEventListener('click', () => setFilter('invitacion'));
    document.getElementById('btnFilterDescartada').addEventListener('click', () => setFilter('descartada'));
    document.getElementById('btnFilterSinClasificar').addEventListener('click', () => setFilter('sin-clasificar'));

    document.getElementById('btnFilterAll').dataset.filter = 'all';
    document.getElementById('btnFilterAmpliacion').dataset.filter = 'ampliacion';
    document.getElementById('btnFilterImpresion').dataset.filter = 'impresion';
    document.getElementById('btnFilterInvitacion').dataset.filter = 'invitacion';
    document.getElementById('btnFilterDescartada').dataset.filter = 'descartada';
    document.getElementById('btnFilterSinClasificar').dataset.filter = 'sin-clasificar';

    document.getElementById('btnFilterAll').classList.add('active');

    document.getElementById('btnExport').addEventListener('click', exportToJSON);
    document.getElementById('btnShare').addEventListener('click', copyToClipboard);
    document.getElementById('btnClear').addEventListener('click', clearAllSelections);

    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.getElementById('btnCancelSelection').addEventListener('click', closeModal);
    document.getElementById('btnSaveSelection').addEventListener('click', saveModalSelection);
    document.getElementById('btnDeleteSelection').addEventListener('click', deleteCurrentSelection);

    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => btn.classList.toggle('selected'));
    });

    document.getElementById('photoModal').addEventListener('click', (e) => {
        if (e.target.id === 'photoModal') closeModal();
    });

    document.getElementById('btnPrevPhoto').addEventListener('click', () => navigatePhoto('prev'));
    document.getElementById('btnNextPhoto').addEventListener('click', () => navigatePhoto('next'));

    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('photoModal');
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') closeModal();
            else if (e.key === 'Enter') saveModalSelection();
            else if (e.key === 'ArrowLeft') navigatePhoto('prev');
            else if (e.key === 'ArrowRight') navigatePhoto('next');
        }
    });
});

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        saveSelections({ sync: false });
    } else if (typeof sbRefreshSelections === 'function') {
        sbRefreshSelections().catch(function(e) { console.warn('[Supabase] Refresh:', e.message); });
    }
});

window.addEventListener('beforeunload', () => saveSelections({ sync: false }));

// ========================================
// DOWNLOAD FUNCTIONS
// ========================================
async function downloadCurrentPhoto() {
    if (currentPhotoIndex === null) return;
    const url = photos[currentPhotoIndex];
    if (!url) return;
    const filename = 'foto-' + (currentPhotoIndex + 1) + '.jpg';
    showToast('Descargando...', 'success');
    try {
        const resp = await fetch(url, { mode: 'cors' });
        const blob = await resp.blob();
        let finalBlob = blob;
        if (!blob.type.includes('jpeg') && !blob.type.includes('jpg')) {
            const bmp = await createImageBitmap(blob);
            const canvas = document.createElement('canvas');
            canvas.width = bmp.width; canvas.height = bmp.height;
            canvas.getContext('2d').drawImage(bmp, 0, 0);
            finalBlob = await new Promise(function(res){ canvas.toBlob(res, 'image/jpeg', 0.95); });
        }
        const a = document.createElement('a');
        const objUrl = URL.createObjectURL(finalBlob);
        a.href = objUrl; a.download = filename;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        setTimeout(function(){ URL.revokeObjectURL(objUrl); }, 2000);
        if (typeof sbRegistrarVisita === 'function') sbRegistrarVisita('descarga');
        showToast('Descargando ' + filename, 'success');
    } catch(e) {
        window.open(url, '_blank');
        showToast('Abriendo foto...', 'success');
    }
}

function downloadAndClose() {
    downloadCurrentPhoto();
    closeModal();
}

(function injectDownloadButtons(){
    function tryInject(){
        var actions = document.querySelector('.modal-actions');
        if (!actions || document.getElementById('btnDownloadClose')) return;
        var btnDlClose = document.createElement('button');
        btnDlClose.id = 'btnDownloadClose';
        btnDlClose.className = 'btn';
        btnDlClose.textContent = '\u2B07 Descargar y Cerrar';
        btnDlClose.style.cssText = 'background:#6c5ce7;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:.85rem;margin-right:4px;';
        btnDlClose.addEventListener('click', downloadAndClose);
        var btnDl = document.createElement('button');
        btnDl.id = 'btnDownloadPhoto';
        btnDl.className = 'btn';
        btnDl.textContent = '\u2B07 JPG';
        btnDl.style.cssText = 'background:#0984e3;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:.85rem;margin-right:4px;';
        btnDl.addEventListener('click', downloadCurrentPhoto);
        actions.insertBefore(btnDlClose, actions.firstChild);
        actions.insertBefore(btnDl, btnDlClose);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tryInject);
    else tryInject();
})();
